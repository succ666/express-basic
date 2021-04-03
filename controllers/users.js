const usersModel = require('../models/users')
const {hash} = require('../utils/tools')

// 注册用户
const signup = async (req, res, next) =>{
  res.set('content-type','application/json;charset=utf-8')
  const {username,password} = req.body

  let bcryptPassword = await hash(password)

  let userfind = await usersModel.userfind({username})

  if(!userfind){
    await usersModel.signup({
      username,
      password: bcryptPassword
    })
    res.render('succ',{
      data: JSON.stringify({
        success:'注册成功'
      })
    })
  }else{
    res.render('fail',{
      data:JSON.stringify({
        error:'该用户已存在'
      })
    })
  }


 
}

exports.signup = signup