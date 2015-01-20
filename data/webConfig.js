/**
 * 
 * @authors wzm111
 * @date    2014-08-18 17:05:07
 * @version 0.0.1
 */
var express = require('express');
var router = express.Router();
var Config = require('../model/config');


router.route('/api/config')
	//获取数据
    .get(function(req, res) {
        Config.find(function(err, demoConfig) {
            if (err) {
                res.send(err);
            }
            res.json(demoConfig);
        })
    })
    //添加数据
    .post(function(req, res) {
        Config.create({
        	website: req.body.website,
            webtitle: req.body.webtitle,
            keywords: req.body.keywords,
            description: req.body.description,
            webnav:{name: req.body.name ,url: req.body.url}

        }, function(err, demoConfig) {
            if (err) {
                res.send(err);
            }

            Config.find(function(err, demoConfig) {
                if (err) {
                    res.send(err);
                }
                res.json(demoConfig);
            })
        })
    })

router.route('/api/config/:OP')
	//修改指定数据
    .post(function(req, res) {
    	console.log(req.body);
        Config.update({
            _id: req.params.OP
        }, {
            website: req.body.website,
            webtitle: req.body.webtitle,
            keywords: req.body.keywords,
            description: req.body.description,
            webnav:req.body.webnav
            
        }, function(err, demoConfig) {
            if (err) {
                res.send(err);
            }

            Config.find(function(err, demoConfig) {
                if (err) {
                    res.send(err);
                }
                res.json(demoConfig);
            })
        })
    })


module.exports = router;