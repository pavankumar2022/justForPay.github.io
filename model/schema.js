const mongoose = require("mongoose");
const validator = require("validator");

const newSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
        minlength: [2, "allowed more than two characters"],
        maxlength: 20
    },
    last_name: {
        type: String,
        require: true,
        minlength: [2, "allowed more than two characters"],
        maxlength: 20
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid !");
            }
        }
    },
    mobile_number: {
        type: Number,
        require: true,
        unique: true,
        min: 10,
    }

});
 const collections = new mongoose.model("Employee",newSchema);
 
module.exports= collections;
