module.exports = (option,app)=>{
    return async function(ctx,next){
        try{
            await next()
        }catch(err){
            app.emit('error',err,this)

            //统一错误处理
            const status = err.status || 500
            //判断是否在生产环境
            const error = status===500 && app.config.env === 'prod' ?
            'Internal Server Error' : 
            err.message

            ctx.body = {
                code:status,
                error:error
            }
            if(status == 422){ //自定义错误,错误信息原样返回
                ctx.body.detail = err.errors
            }

            ctx.status = 200;

        }
    }
}