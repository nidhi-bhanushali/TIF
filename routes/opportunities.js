const express = require('express');
const router = express.Router();
const Opportunity = require('../models/Opportunities')
const { check, validationResult } = require('express-validator');
// const Opportunities = require('../models/Opportunities');


// @route   GET api/opportunities
//  @desc   Get all opportunities
// @access  Public

router.get('/' , async(req , res) => {
    try {
        const opportunities = await Opportunity.find()
        res.json(opportunities)
    } catch (error) {
        console.log(error.message)
    }
})

// @route   Post api/opportunities
//  @desc   Create opportunity
// @access  Public

router.post('/' , 

[
    check('postedBy', 'Please enter the email')
        .isEmail(),
    check('title' , 'Please enter the title')
        .isLength(),
    check('description', 'Please enter the description')
        .not()
        .isEmpty(),
    check('location' , 'Please enter a location')
        .not()
        .isEmpty(), 
    check('noOfHours' , 'Please enter no of hours')
        .not()
        .isEmpty()   
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:errors.array() });
    }

    const { postedBy , title , description, location , 
        startDate , endDate , noOfHours } = req.body; 

    try {

        opportunity = new Opportunity({
            postedBy,
            title,
            description,
            location,
            startDate,
            endDate,
            noOfHours
        });

        await opportunity.save();

        const payload = {
            opportunity: {
                id: opportunity.id
            }
        }
        res.json({msg : payload})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
