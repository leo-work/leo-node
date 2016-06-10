'use strict';
/**
* nodejs project
*
* @author leo <leo16241022@gmail.com>
*/

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _projectCore = require('project-core');

var _projectCore2 = _interopRequireDefault(_projectCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const $ = global.$ = new _projectCore2.default();

//加载配置文件
$.init.add(done => {
  $.config.load(_path2.default.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if (env) {
    $.config.load(_path2.default.resolve(__dirname, '../config', env + '.js'));
  }
  $.env = env;
  done();
});

//初始化
$.init(err => {
  if (err) {
    console.error(err);
    process.exit(-1); //异常退出
  } else {
      console.log('init success ! [env = %s]', $.env);
    }
});