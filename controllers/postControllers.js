const Photo = require('../models/Photo');
const fs = require('fs');

exports.getAllPhotos = async(req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
};

exports.getPhoto = async (req, res) => {
  const post = await Photo.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.createPost = async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
}

exports.updatePhoto = async (req, res) => {
  const post = await Photo.findOne({ _id: req.params.id });
  post.title = req.body.title
  post.description = req.body.description
  post.save()

  res.redirect(`/photos/${req.params.id}`)
};

exports.deletePost = async (req, res) => {
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
  
}