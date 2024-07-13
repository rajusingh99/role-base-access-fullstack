const Scenario = require('../Model/scenario');
const scenarioUpdate = require('../Model/scenarioUpdate')
exports.scenario=async(req,res)=>{
try{
    const{risk_scenario,risk_description,risk_field1,risk_field2,tags,status,save_as_draft}=req.body;
    if(!risk_scenario){
        return res.status(401).json({
            success:false,
            message:"fill all required field."
        })
    }
    const scenarioData=new Scenario({
        risk_scenario,
        risk_description,
        risk_field1,
        risk_field2,
        tags: Array.isArray(tags) ? tags : tags.split(','),
        status,
        save_as_draft
    })
    const scenario_details=await scenarioData.save();
    if(scenario_details){
        return res.status(200).json({
            success:true,
            data:scenario_details,
            message:"Scenario data has been created successfully."
        })
    }
}catch(err){
    return res.status(400).json({
        success:false,
        message:`Something went wrong in scenario controller ${err.message}`
    })
}
}
exports.scenarioUpdate=async(req,res)=>{
    try{
        const {risk_scenario_id,likehood_score,business_score}=req.body;
        if(!risk_scenario_id){
           return res.send("risk scenario is required");
        }
       const response=await scenarioUpdate.create({risk_scenario_id:risk_scenario_id,net_score:(likehood_score*business_score)/5})
       return res.send("scenario updated successfully")
       }
       catch(err){
       return res,send(`oops something gets wrong ${err.message}`)
   }
   
}

exports.getAllScenario=async(req,res)=>{
    try{
        const get_scenario=await Scenario.find({});
        if(get_scenario){
            return res.status(200).json({
                success:true,
                message:"All scenario data has been successfully fatched",
                data :get_scenario,
            })
        }
    }catch(err){
        return res.status(400).json({
            success:true,
            message:"Something went wrong during get all scenario"
        })
    }
}