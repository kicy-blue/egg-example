const {Controller} = require('egg')

/**
 * @Controller 用户管理
 */
class UserController extends Controller{
    constructor(ctx){
        super(ctx)
    }
     /**
    接口的描述文档:
     * @summary 创建⽤户
     * @description 创建⽤户，记录⽤户账户/密码/类型
     * @router post /api/user
     * @request body createUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async create(){
        const {ctx,service} = this
        // ctx.body = 'user ctrl 90'

        /**
        *接口校验
        *框架本身不支持校验,使用插件形式,再加上它内部注册了 
        *rule.createUserRequest,并暴露出来,两者结合可以实现
         */
        ctx.validate(ctx.rule.createUserRequest) //检验参数

        // const res = {
        //     abc: 123
        // }
       

        //组装参数
        const payload = ctx.request.body || {} //从前端获取参数
        //调用Service进行业务逻辑处理
        const res = await service.user.create(payload) //调用service层创建用户的方法
        //设置响应内容和响应状态码
        ctx.helper.success({ctx,res})
    }
}

module.exports = UserController