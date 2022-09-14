import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'Please enter in name'],
        uniqe: true,
        trim: true,
        maxLength: [100, 'name cannot be more than 100 characters long']
    },
    email : {
        type: String,
        required : [true, 'Please enter in email'],
        uniqe: true,
        trim: true,
        maxLength: [100, 'name cannot be more than 100 characters long']
    },
    message : {
        type: String,
        required : [true, 'Please enter in email'],
        uniqe: true,
        trim: true,
    }

})

module.exports = mongoose.models.Message || mongoose.model('Message', Schema);

export default module.exports