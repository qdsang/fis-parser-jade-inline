fis-parser-jade-inline
===============

A parser for fis to compile inline jade file.

内嵌jade模板， 编译后的模板依赖runtime

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