let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let projectSchema = new Schema({
     
     name: {
          type: String,
        
     },
     stacks: {
          type:[String],
          
     },
     description: {
          type: String,
          
     },
     duration: {
          type: String,
     },
    
     categories: {
          type: String
     },
     vacancies: {
          type:String,
          
     },
     author: {
          type: String          
     },
     contacts: {
         type:[String]           
     }
}, {
     versionKey: false
});

const  Project = mongoose.model('Project', projectSchema);

module.exports = Project;

