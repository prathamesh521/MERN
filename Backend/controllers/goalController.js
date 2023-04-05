const asyncHandler =  require('async-handle');
const getGoals = asyncHandler((req, res) => {
    res.status(200).json({message: 'Get goals'});
})

const setGoal = asyncHandler((req, res) => {
    res.status(200).json({message: 'Set goal first'});
})

const updateGoal = asyncHandler((req, res) => {
    res.status(200).send({message: `update goal ${req.params.id}`});
})

const deleteGoal = asyncHandler((req, res) => {
    res.status(200).send({message: `delete goal ${req.params.id}`});
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}