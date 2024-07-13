
const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
}, { _id: false });

const ScenarioSchema = new mongoose.Schema({
    risk_scenario: {
        type: String,
        required: true,
    },
    risk_description: {
        type: String,
    },
    risk_field1: {
        type: String,
    },
    risk_field2: {
        type: String,
    },
    tags: {
        type: [TagSchema],
    },
    status: {
        type: Boolean,
    },
    save_as_draft: {
        type: Boolean,
    },
});

module.exports = mongoose.model('Scenario', ScenarioSchema);
