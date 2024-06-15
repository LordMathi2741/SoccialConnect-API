
const express = require("express")
const ModelUser = require('../models/userModel')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const users = await ModelUser.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: 'Error retrieving users', error: err });
    }
});

router.get('/:firstName', async (req, res) => {
    try {
       const user = await ModelUser.find({ firstName: req.params.firstName });
       res.status(200).json(user);
    }catch(err){
        res.status(404).json({ message: 'Error retrieving user', error: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const users = await ModelUser.create(req.body);
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error creating user', error: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const users = await ModelUser.findOneAndUpdate({id: req.body.id}, req.body, {new: true});
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error updating user', error: err });
    }
});

router.delete('/:id', async (req, res) => {

    try {
        const users = await ModelUser.findOneAndDelete({id: req.body.id});
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({ message: 'Error deleting user', error: err });
    }
});

module.exports = router;

