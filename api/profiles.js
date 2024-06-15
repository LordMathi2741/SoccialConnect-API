const express = require('express');
const ProfileModel = require('../models/profileModel');
const router = express.Router();


router.get('/', async (req, res) => {
        try {
            const profiles = await ProfileModel.find({});
            res.status(200).json(profiles);

        }catch (err) {
            res.status(404).json({ message: err.message });
        }
});


router.post('/', async (req, res) => {

    try {
        const profile = await ProfileModel.create(req.body);
        res.status(201).json(profile);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});


router.put('/', async (req, res) => {
    try {
        const profile = await ProfileModel.findOneAndUpdate({id: req.body.id}, req.body, {new: true});
        res.status(200).json(profile);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/', async (req, res) => {

    try{
        const profile = await ProfileModel.findOneAndDelete({id: req.body.id});
        res.status(200).json(profile);
    }catch(err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;