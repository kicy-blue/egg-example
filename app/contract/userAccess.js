
module.exports = {
    loginRequest: {
        mobile:{type:'string',require:true,description:'手机号',example:'18802683200',format:/^1[34578]\d{9}$/},
        password:{type:'string',require:true,description:'密码',example:'123456'}
    }
}