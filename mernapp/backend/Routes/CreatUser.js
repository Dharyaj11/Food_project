const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post("/creatuser",
    [// username must be an email
        body('email', 'invalid Email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'invalid password').isLength({ min: 3 }),
        body('name', 'invalid name').isLength({ min: 3 })
    ], async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await User.create({
                name: req.body.name,
                password: req.body.password,
                location: req.body.location,
                email: req.body.email
            })
            res.json({ success: true });

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })


router.post("/loginuser",
    [// username must be an email
        body('email', 'invalid Email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'invalid password').isLength({ min: 3 }),

    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "try login with valid credentials" });
            }

            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "try login with valid credentials" });


            }
            else {
                return res.json({ success: true });

            }

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;