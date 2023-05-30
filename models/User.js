import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
      },
    password: {
        type: String,
      }     
});

const User = mongoose.models.User  || mongoose.model('User', UserSchema);

export default User;