const mongoose = require('mongoose');
const Contact = new mongoose.Schema({ 
        ten: 'string', 
        dienthoai: 'number' 
}, {
  collection: 'contact'
});


module.exports = mongoose.model('contact', Contact);