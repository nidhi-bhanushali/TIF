const express = require('express');
const router = express.Router();


// @route   GET api/users
//  @desc   Get all users
// @access  Public

router.get('/' , (req , res) => {
    try {
        res.json({msg : 'Getting all users'})
    } catch (error) {
        console.log(error)
    }
    // res.json({msg : 'Getting all users'})
})

// @route   Post api/users
//  @desc   Add new user
// @access  Public

router.post('/' , (req, res) => {
    // try {
    //     res.json({msg : 'Add new user'})
    // } catch (error) {
    //     console.error(error)
    // }
    res.json({msg : 'Add new user'})
})

module.exports = router
