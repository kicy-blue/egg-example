const Service = require('egg').Service

class UserService extends Service {
    /**
     * @param {*} payload
     */
    async create(payload){
        const {ctx} = this;
        payload.password = await this.ctx.genHash(payload.password)
        return ctx.model.User.create(payload) //User集合--就是User表, 就是再User表里常见一个用户
    }
}

module.exports = UserService