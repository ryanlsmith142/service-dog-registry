const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../../models/User')

router.post('/', [
    check('firstName', 'Name is required').not().isEmpty(),
    check('lastName', 'Last name is required.').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6})
], async function (req, res) {
    const { firstName, lastName, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        } else {
            user = new User({
                firstName,
                lastName,
                email,
                password
            })
        }

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;