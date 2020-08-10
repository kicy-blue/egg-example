'user strict'

const Service = require('egg').Service

class UserAccessService extends Service {
    async login(payload){
        const {ctx,service} = this;
        const user = await service.user.findByMobile(payload.mobile)

        if(!user){
            ctx.throw(404, 'user not found')
        }

        //使用compare()函数,密码在数据库里存的是hash,所以这样要先hash之后再去数据库查找比对
        let verifyPsw = await ctx.compare(payload.password, user.password)
        if(!verifyPsw){
            ctx.throw(404,'user not found') //为了安全,报一致性错误'user not found'
        }
        //生成token 授权,发放令牌:service.actionToken.apply
        return { token: await service.actionToken.apply(user._id)}
    }
    //退出,丢弃token
    async logout(){

    }

    //返回现在登录的用户信息
    async current(){
        const {ctx,service} = this
        const _id = ctx.state.user.data._id;
        const user = await service.user.find(_id)
        if(!user){
            ctx.throw(404,'user is not found')
        }
        user.password = 'hahahah';//不把password暴露给前端
        return user
    }
}

module.exports = UserAccessService