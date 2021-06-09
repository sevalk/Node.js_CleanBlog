const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo title 2',
//   description: 'Photo description 2 ',
// });

//read a photo
// Photo.find({}, (err, data) =>{
//     console.log(data);
// })

//update photo

// const id = '60b110db4a25131230f58cd8';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo 2 updated 2',
//     description: 'Photo description 2 updated 2',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete photo
// const id = '60b110db4a25131230f58cd8';

// Photo.findByIdAndDelete(id, (err, data) => {
//   console.log('Removed...');
// });
