var mongoose = require('mongoose'); //导入mongoose

mongoose.connect('mongodb://127.0.0.1:27017/aDemo', function (error) {
    if (error) {
        console.log(error);
    }
});

module.exports = mongoose;
