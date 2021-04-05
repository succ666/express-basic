const { Users } = require('../utils/db')

const userfind = ({username})=>{
  return Users.findOne({username})
}

const signup = ({username, password})=>{
  const users = new Users({
    username,
    password
  })
  return users.save()
}

const list = ()=>{
  return Users.find()
}

const remove = (id)=>{
  return Users.remove({_id:id})
}

module.exports = {
  signup,
  userfind,
  list,
  remove
}