'use strict'

//工作的Server层,签发令牌,用jwt.sgin()方法,参数此处用id
const Service = require('egg').Service

class ActionTokenService extends Service {
    async apply(_id) {
        const {ctx} = this
        return ctx.app.jwt.sign({
            data: {
                _id: _id
            },
            exp:Math.floor(Data.now() / 1000) + (60*60*24*7)
        },ctx.app.config.jwt.secret)
    }
}

module.exports = ActionTokenService
//下一个构建另一个service层 : service/userAccess鉴权功能