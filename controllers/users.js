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

// 获取用户列表
const list = async (req, res, next)=>{
  res.set('content-type','application/json;charset=utf-8')
  let usersList = await usersModel.list()
  res.render('succ',{
    data:JSON.stringify(usersList)
  })
}

// 删除
const remove = async (req, res, next)=>{
  res.set('content-type','application/json;charset=utf-8')
  const {id} = req.body
  const result = await usersModel.remove(id)
  if(result.n ==1 && result.ok == 1)  {
    res.render('succ',{
      data:JSON.stringify({
        message:'删除成功！'
      })
    })
  }else{
      res.render('fail',{
        data:JSON.stringify({
          message:'删除失败！'
        })
      })
  }
}

exports.signup = signup
exports.list = list
exports.remove = remove