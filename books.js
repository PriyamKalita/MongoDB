const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,       // Changed from Type to type
//         required: true,     // Changed from require to required
//     },
//     author: {
//         type: String,
//     },
//     price: {
//         type: Number,
//     },
// });

// const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics Xi",
//     author: "RD Scharma",
//     price: 1200
// });

// book1
//  .save()
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// let book2 = new Book({
//     title: "Mathematics Xii",
//     author: "RD Scharma",
//     price: 120
// });

// book2
//  .save()
//  .then((res) => {
//     console.log(res);
//  })
//  .catch((err) => {
//     console.log(err);
//  });

// Schema Type Options
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon Selling"],
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

// Create an instance of the model
// let book1 = new Book({
//     title: "Marvel",
//     price: 500,
//     category: "fiction",
//     genre: ["comics", "Superhero", "Fiction"],
// });

// // Save the instance to the database
// book1
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Book.findByIdAndUpdate(
    "66a728cfc4436ee807ebb3ec", // Use a valid ID from your database
    { price: -100 }, // Invalid price to trigger validation error
    { runValidators: true }
)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties); // Correct error handling
        console.log(err.errors.price.properties.message);
    });