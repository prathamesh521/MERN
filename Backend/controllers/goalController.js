const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'});
}
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goal first'});
}
const updateGoal = (req, res) => {
    res.status(200).send({message: `update goal ${req.params.id}`});
}
const deleteGoal = (req, res) => {
    res.status(200).send({message: `delete goal ${req.params.id}`});
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}