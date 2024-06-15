
const express = require("express")
const UserModel = require('../models/userModel')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: 'Error retrieving users', error: err });
    }
});

router.get('/:firstName', async (req, res) => {
    try {
       const user = await UserModel.find({ firstName: req.params.firstName });
       res.status(200).json(user);
    }catch(err){
        res.status(404).json({ message: 'Error retrieving user', error: err });
    }
});

router.post('/', async (req, res) => {
    try {
        const users = await UserModel.create(req.body);
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error creating user', error: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const users = await UserModel.findOneAndUpdate({id: req.body.id}, req.body, {new: true});
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: 'Error updating user', error: err });
    }
});

router.delete('/:id', async (req, res) => {

    try {
        const users = await UserModel.findOneAndDelete({id: req.body.id});
        res.status(200).json(users);
    }catch(err){
        res.status(400).json({ message: 'Error deleting user', error: err });
    }
});

module.exports = router;

