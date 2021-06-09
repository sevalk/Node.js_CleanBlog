  
const Photo = require('../models/Photo');

exports.getAboutPage =(req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getEditPage = async (req, res) => {
  const post = await Photo.findById(req.params.id);
  res.render('edit', {
    post,
  });
}
exports.getPostPage = (req, res) => {
  res.render('post');
}