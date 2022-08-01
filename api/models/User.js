import mongoose from "mongoose";


//? create student schema

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true

    },
    email : {
        type : String,
        required: true,
        trim : true,
        unique : true

    },
    cell : {
        type : String,
        required : true,
        trim : true,
        unique : true

    },
    age : {
        type : Number,
        required: true,
        
    },
    password : {
        type : String,
        required: true,
        trim : true
    },
    username : {
        type : String,
        required : true,
        trim : true,
    },
    gender : {
        type : String,
    },
   
    photo : {
        type : String,
        
    },
    isAdimn : {
        type : Boolean,
        default : false
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : Boolean,
        default : false
    }
        
}, {
    timestamps : true
})


//* export model
export default mongoose.model("User", userSchema);