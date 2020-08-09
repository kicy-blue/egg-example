/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596964634328_6133';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  //配置swaggerdom文档
  config.swaggerdoc = {
    dirScanner:'./app/controller',
    apiInfo:{
        title:'kicy-test api',
        description:'kicy-test api swagger-ui egg',
        version:'1.0.0'
    }, 
    //接口文档格式 schemes consumes
    schemes:['http','https'],
    consumes:['application/json'],
    produces:['application/json'],
    enableSecurity:false,
    // enableValidate:true, //检验官方还没实现
    routerMap:true,
    enable:true,
  }
  //配置mongoose
  config.mongoose={
    //   url:'mongodb:127.0.0.1:27017/test',
      url:'mongodb://localhost:27017/test',
      options:{
          //useMongoClient:true,
          autoReconnect:true,
          reconnectTries:Number.MAX_VALUE,
          bufferMaxEntries:0
      }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
