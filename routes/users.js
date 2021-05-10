const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { check, validationResult } = require('express-validator')

// @route   GET api/users
//  @desc   Get all users
// @access  Public

router.get('/' , (req , res) => {
    try {
        res.json({msg : 'Getting all users'})
    } catch (error) {
        console.log(error)
    }
})

// @route   Post api/users
//  @desc   Add new user
// @access  Public

router.post('/' , 
    [
        check('email', 'Please include a valid email')
            .isEmail(),
        check('phone' , 'Please enter your phone number')
            .isLength({min: 10}),
        check('timeCommitment', 'Please enter the time you can commit')
            .not()
            .isEmpty(),
        check('note' , 'Please enter a short note')
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors:errors.array() });
        }

    const { email , phone , timeCommitment , note , opportunity } = req.body;

    try {
        let user = await User.findOne({email});
        
        if(user){
            return res.status(400).json({msg: 'User already exists'})
        }

        user = new User({
            opportunity,
            email,
            phone,
            timeCommitment,
            note
        });

        await user.save();
        
        const payload = {
            user: {
                id: user.opportunity
            }
        }
        res.json({msg : payload})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
    // res.json({msg : 'Add new user'})
})

module.exports = router
