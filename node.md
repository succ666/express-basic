
# nodejs学习日志

### 工具
* 使用 supervisor 或 nodemon 热更新
* 使用 mongoose 操作mogodb数据库
* bcrypt 加密工具
* cors 允许跨域

### 问题
# 使用 x-www-from-urlencoded 发送数据，不然req.body没有数据

### 流程

#### 用户注册接口
1. 注册路由 router.post('/signup',signup);
2. controllers->users.js中编写 存入数据库中的逻辑代码
3. models->users.js中操作数据库
> 判断用户是否注册
> 没有注册，密码进行加密然后存入数据库
> 注册，返回该用户已注册

#### 获取用户列表
* Users.find()

#### 删除
* Users.remove({_id:id})
* 返回值是本次删除操作的信息对象，形如：{ n: 2, ok: 1, deletedCount:2 }
* n：表示匹配的条数
* ok：表示本次删除操作是否执行成功，1：成功，0：失败
* deletedCount：代表已经被删除的条数
* 补充说明：当本次删除操作异常时，n和deletedCount就有可能不一致*
