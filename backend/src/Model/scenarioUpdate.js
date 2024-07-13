const mongoose = require('mongoose');

const ScenarioUpdate = new mongoose.Schema({
    risk_scenario_id:{
        type:String,
        required:true,
    },
    net_score:{
        type:String,
    },
   
})

module.exports = mongoose.model('ScenarioUpdate',ScenarioUpdate)