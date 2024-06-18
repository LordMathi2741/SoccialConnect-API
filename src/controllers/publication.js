const express = require('express');
const PublicationModel = require('../models/publicationModel');
const router = express.Router();

/**
 *  @ngdoc method
 *  @name Get all profiles for the mongo database
 *  @author LordMathi2741 <https://github.com/LordMathi2741>
 * @version 1.0
 */

router.get('/', async (req, res) => {
        try {
            const profiles = await PublicationModel.find({});
            res.status(200).json(profiles);

        }catch (err) {
            res.status(404).json({ message: err.message });
        }
});

/**
 * @ngdoc method
 * @name Post profile information to the mongo database
 * @param {body} body The profile information
 * @author LordMathi2741 <https://github.com/LordMathi2741>
 * @version 1.0
 */


router.post('/', async (req, res) => {

    try {
        const profile = await PublicationModel.create(req.body);
        res.status(201).json(profile);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});


/**
 * @ngdoc method
 *  @name Update profile information in the mongo database
 *  @param {id} id The profile identifier to update
 *  @author LordMathi2741 <https://github.com/LordMathi2741>
 * @version 1.0
 */


router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const updatedData = req.body; 

        const profile = await PublicationModel.findOneAndUpdate(
            { _id: id }, 
            updatedData,
            { new: true, runValidators: true } 
        );

        if (!profile) {
            return res.status(404).json({ message: 'Publication not found' });
        }
        res.status(200).json(profile);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 *  @ngdoc method
 *   @name Delete profile information from the mongo database
 *   @param {id} id The profile identifier to delete
 *   @version 1.0
 */
 
router.delete('/:id', async (req, res) => {

    try{
        const profile = await PublicationModel.findOneAndDelete({id: req.body.id});
        res.status(200).json(profile);
    }catch(err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;