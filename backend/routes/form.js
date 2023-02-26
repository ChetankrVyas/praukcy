const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { body, validationResult } = require('express-validator');
// Form Fill
router.post('/',[
    body('title', 'Enter a valid title').isLength({ min: 3 }),],
    async (req, res) =>{
       try {
            const { name,title, description, tag
             } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })