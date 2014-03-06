fis-parser-jade-inline
===============

js代码中内嵌jade模板

https://github.com/visionmedia/jade

jade 中文教程 https://github.com/visionmedia/jade/blob/master/Readme_zh-cn.md

编译后的模板依赖jade runtime https://github.com/visionmedia/jade/blob/master/runtime.js

可以通过（ isInlineRuntime ）配置来控制是否内嵌jade runtime （默认为true）

如果页面多处使用jade内嵌模板， 最好直接在页面中引用


```
fis.config.merge({
    project : {
        fileType : {
            text : 'jtpl'
        }
    },
    modules : {
        parser : {
            jtpl : 'jade-inline'
        }
    },
    settings : {
        parser : {
            'jade-inline': {
                isInlineRuntime : true
            }
        }
    }
});
```
