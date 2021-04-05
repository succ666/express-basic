var express = require('express');
var router = express.Router();

const {signup , list, remove} = require('../controllers/users')

// 注册
router.post('/signup', signup);

// 获取注册用户
router.get('/list', list)

// 删除
router.post('/remove', remove)



  
module.exports = router;
