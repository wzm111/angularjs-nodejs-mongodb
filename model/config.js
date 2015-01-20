var mongoose = require('../data/db'); //数据连接
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var webConfig = new Schema({
    website: {type: String, default: 'http://127.0.0.1:3000/'},
    webtitle: {type: String, default: '我的站点'},
    keywords: {type: String, default: '网站关键词'},
    description: {type: String, default: '网站说明'},
    webnav: {
        type: Array, default:[
            {name: '首页',url:'/'},
            {name: '网站设置',url:'/config'}
        ]
    }
},{ collection: 'config'});

module.exports = mongoose.model('config', webConfig);