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


module.exports = {
  signup,
  userfind
}