var mongoose = require('../data/db'); //数据连接
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var ASchema = new Schema({
    title: {type: String, default: '没有写标题'},
    cont: {type: String, default: '没有写内容'},
    time: Object
},{ collection: 'list'});

module.exports = mongoose.model('list', ASchema);

/*var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var ASchema = new Schema({
	articleId: { type: Schema.Types.ObjectId, default:ObjectId },
	userId: { type: Schema.Types.ObjectId, ref: 'user' },
	articleAvatar: String,
    articleTitle: String,
    articleType: String,
    articleContent: String,
    articlePic: String,
    articlePv: { type: Number, default: 0 },
    articlePt: { 
        type: Object, 
        default: {}
    },
	articleTip : String ,   //摘要
    articleStatus: { type: Number, default: 1 },
    //articleStatus  1 主页显示  2  备用功能  0 默认
    articleShowCode: Boolean,//详情页是否展示代码
    articleCode: Object
},{ collection: 'article'});

// Mongoose Model definition
module.exports = mongoose.model('article', ASchema);*/


/*var all = mongoose.model('All', {
    text: String
})*/
//module.exports = all;