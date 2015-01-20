/**
 *
 * @authors wzm111
 * @date    2014-08-18 17:05:07
 * @version 0.0.1
 */

'use strict';
var express = require('express');
var router = express.Router();
var Demo = require('../model/model');

router.route('/api/demos')
    //获取全部数据
    .get(function(req, res) {
        Demo.find(function(err, demoList) {
            if (err) {
                res.send(err);
            }
            res.json(demoList);
        })
    })
    //添加数据
    .post(function(req, res) {
        var date = new Date();
        Demo.create({
            title: req.body.title,
            cont: req.body.cont,
            time: {
                year: date.getFullYear(),
                month: date.getFullYear() + '-' + (date.getMonth() + 1),
                day: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
                minute: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()),
                seconds: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())
            }
        }, function(err, demoList) {
            if (err) {
                res.send(err);
            }

            Demo.find(function(err, demoList) {
                if (err) {
                    res.send(err);
                }
                res.json(demoList);
            })
        })
    })


router.route('/api/demos/:OP')
    // 获取指定数据
    .get(function(req, res) {
        Demo.findOne({
            _id: req.params.OP
        }, function(err, demoList) {
            if (err) {
                res.send(err);
            }
            res.json(demoList);
        })
    })
    //修改指定数据
    .post(function(req, res) {
        var date = new Date();
        Demo.update({
            _id: req.params.OP
        }, {
            title: req.body.title,
            cont: req.body.cont,
            time: req.body.time
            
        }, function(err, demoList) {
            if (err) {
                res.send(err);
            }

            Demo.find(function(err, demoList) {
                if (err) {
                    res.send(err);
                }
                res.json(demoList);
            })
        })
    })
    //删除指定数据
    .delete(function(req, res) {
        Demo.remove({
            _id: req.params.OP
        }, function(err, demoList) {
            if (err) {
                res.send(err);
            }

            Demo.find(function(err, demoList) {
                if (err) {
                    res.send(err);
                }
                res.json(demoList);
            })
        })
    })

module.exports = router;


//获取数据
/*router.get('/api/demos', function(req, res) {
    Demo.find(function(err, demoList) {
        if (err) {
            res.send(err);
        }
        res.json(demoList);
    })
})

router.get('/api/demos/:OP', function(req, res) {
    Demo.findOne({ _id: req.params.OP }, function (err, demoList) {
        if (err) {
            res.send(err);
        }
        res.json(demoList);
    })
})*/

//增加数据
/*router.post('/api/demos', function(req, res) {
    var date = new Date();
    Demo.create({
        title: req.body.title,
        cont: req.body.cont,
        time: {
                year: date.getFullYear(),
                month: date.getFullYear() + '-' + (date.getMonth() + 1),
                day: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
                minute: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()),
                seconds: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())
            }
    }, function(err, demoList) {
        if (err) {
            res.send(err);
        }

        Demo.find(function(err, demoList) {
            if (err) {
                res.send(err);
            }
            res.json(demoList);
        })
    })
})*/

//修改数据
/*router.post('/api/demos/:OP', function(req, res) {
    var date = new Date();
    Demo.update({_id: req.params.OP}, {
        title: req.body.title,
        cont: req.body.cont,
        time: {
                year: date.getFullYear(),
                month: date.getFullYear() + '-' + (date.getMonth() + 1),
                day: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
                minute: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()),
                seconds: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ':' + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())
            }
    }, function(err, demoList) {
        if (err) {
            res.send(err);
        }

        Demo.find(function(err, demoList) {
            if (err) {
                res.send(err);
            }
            res.json(demoList);
        })
    })
})*/

//删除数据
/*router.delete('/api/demos/:OP', function(req, res) {
    Demo.remove({
        _id: req.params.OP
    }, function(err, demoList) {
        if (err) {
            res.send(err);
        }

        Demo.find(function(err, demoList) {
            if (err) {
                res.send(err);
            }
            res.json(demoList);
        })
    })
})*/