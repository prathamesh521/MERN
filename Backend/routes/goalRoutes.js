const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({message: 'Get Goals'});
});
router.post('/', (req, res) => {
    res.status(200).send({message: 'Set Goals'});
});
router.put('/:id', (req, res) => {
    res.status(200).send({message: `update goals ${req.params.id}`});
});
router.delete('/:id', (req, res) => {
    res.status(200).send({message: `delete goals ${req.params.id}`});
});

module.exports = router