const router = require('express').Router();
const Thought = require('../models/Thought');

router.get('/', (req, res, next) => {
    Thought.find({}, (err, thoughts) => {
        if(err) next(err);
        else res.json(thoughts);
    });
});

router.post('/create', (req, res, next) => {
    const {thought} = req.body;
    const newThought = new Thought({
        thought, 
        dateCreated: new Date()
    });
    newThought.save(err => {
        if(err) next(err);
        else res.json({newThought,msg: 'Thought successfully saved'});
    });
});


module.exports = router;