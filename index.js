
'use strict';


var jade = require('jade')
    , runtimejs = '';

module.exports = function(content, file, conf){
    conf.compileDebug = false;

    var tmpl = jade.compileClient( content, conf ),
        fn = '', fnstr = '';


    if (conf.isInlineRuntime !== false) {
        if (runtimejs == '') {
            try {
                var runtimefile = __dirname + '/node_modules/jade/runtime.js';
                runtimejs = require('fs').readFileSync(runtimefile, 'utf8')
            } catch (ex) {
                runtimejs = ' ';
                console.log('jade-inline: jade.runtime.js read file error' + ex);
            }
        }
        fn += runtimejs;
    }

    // 兼容旧版本 jade
    fn += 'if (typeof template == \'undefined\'){template = anonymous;} ';
    fn += 'return template(locals);'+ tmpl.toString();
    fnstr = 'function(locals){' + fn + '};'
    return fnstr;
};
