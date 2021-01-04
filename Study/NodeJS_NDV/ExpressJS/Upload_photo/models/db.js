const mongoose = require('mongoose');



const Sanpham = new mongoose.Schema({ 
  ten: {type: String},
  gia:  {type: Number},
  anh: {type: Array}

}, {collection: 'uploadsp'});
module.exports = mongoose.model('uploadsp', Sanpham);