const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    address: { 
        type: Schema.Types.ObjectId, 
        ref: 'address'
    }/*,
    service: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'service'
    }],
    booking: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'booking'
    }],
    review: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'review'
    }]*/
})


UserSchema.virtual('userId').get(function() { return this._id; });

const User = mongoose.model('user', UserSchema);

module.exports = User;