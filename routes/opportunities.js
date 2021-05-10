const express = require('express');
const router = express.Router();


// @route   GET api/opportunities
//  @desc   Get all opportunities
// @access  Public

router.get('/' , (req , res) => {
    try {
        res.json({msg : 'Getting all opportunities'})
    } catch (error) {
        console.log(error)
    }
})

// @route   Post api/opportunities
//  @desc   Create opportunity
// @access  Public

router.post('/' , (req, res) => {
    try {
        res.json({msg : 'Create new opportunity'})
    } catch (error) {
        console.error(error)
    }
})

module.exports = router
