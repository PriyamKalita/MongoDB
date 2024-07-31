const mongoose = require('mongoose');

// Approach (i)
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// Approach (ii)
// main().catch(err => console.log(err));

// Approach (iii)
main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// (i) Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// (ii) Models
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// (ii) Insert one
// const user1 = new User({
//     name: "A",
//     email: "abc@sample.com",
//     age: 8,
// });

// const user2 = new User({
//     name: "b",
//     email: "abcde@sample.com",
//     age: 28,
// });

// (iv)
// user1.save();
// user2.save();

// user2
//    .save()
//    .then((res) => {
//     console.log(res);
//    })
//    .catch((err) => {
//     console.log(err);
//    });

// (v) Insert Multiple
// User.insertMany([
//     { name: "A", email: "abc.in", age: 90 },
//     { name: "b", email: "abcde.in", age: 20 },
//     { name: "c", email: "abcfc.in", age: 40 },

// ]).then((res) => {
//         console.log(res);
//     });

// (vi) FIND
// User.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// (vii) FIND With condition
// User.find({ age: { $gt: 50}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// (viii) FIND One With condition
// User.findOne({ age: { $gt: 50}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// (ix) FIND By Id 
// User.findById("66a708bfa785ef787f0f0127")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// (x) Update
// (a) Update One
// User.updateOne({ name : "A"}, { age : 20})
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// (b) Update Many
// User.updateMany({age:{$gte: 40}}, { age : 20})
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// (c) Find One and Update
// User.findOneAndUpdate({name: "A"}, { age : 37}, {new : true})
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// (xi) DELETE
// (a) Delete one
// User.deleteOne({ name: "A" })
//     .then((res) => {
//         console.log(res);
//     });

// (b) Delete Many
// User.deleteMany({ age: 28 })
//     .then((res) => {
//         console.log(res);
//     });

// (c) Find By Id and Delete
User.findByIdAndDelete("66a601a063424743ff7bac6f")
    .then((res) => {
        console.log(res);
    });