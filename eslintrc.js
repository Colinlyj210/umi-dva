module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    // extends: 'eslint:recommended',  //启用推荐的规则
    parser: "babel-eslint",
    plugins: [
        "react"
    ],
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    rules: {
        //这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
        "for-direction": "error", //基本用lodash
        "getter-return": "error", //if your project will not be using ES5 property getters you do not need this rule.
        // "no-await-in-loop": "error", //await用不到
        "no-compare-neg-zero": "error", //disallow comparing against -0
        "no-cond-assign": ["error", "always"], //禁止条件表达式中出现赋值操作符
        "no-console": ["error", {allow: ["warn", "error"]}], //禁用warn、error之外的console
        "no-constant-condition": "error", //禁止在条件中使用常量表达式
        "no-control-regex": "error", //禁止在正则表达式中使用控制字符，有可能用到就去掉该限制
        "no-debugger": "error", //禁用 debugger
        "no-dupe-args": "error", //禁止 function 定义中出现重名参数
        "no-dupe-keys": "error", //禁止对象字面量中出现重复的 key
        "no-duplicate-case": "error", //禁止出现重复的 case 标签
        "no-empty": ["error", {allowEmptyCatch: true}], //禁止出现空语句块
        "no-empty-character-class": "error", //禁止在正则表达式中使用空字符集，遗漏new RegExp("^abc[]")
        "no-ex-assign": "error", //该规则禁止对 catch 子句中的异常重新赋值 e=10
        "no-extra-boolean-cast": "error", //该规则禁止不必要的布尔类型转换  !!!a
        // "no-extra-parens": "error", //禁止不必要的括号
        "no-extra-semi": "error", //禁止不必要的分号
        "no-func-assign": "error", //禁止对 function 声明重新赋值
        "no-inner-declarations": "error", //禁止在嵌套的块中出现变量声明或 function 声明
        "no-invalid-regexp": ["error", {allowConstructorFlags: ["u", "y"]}], //禁止 RegExp 构造函数中存在无效的正则表达式字符串，es6新增u:unicode,y:sticky
        // "no-irregular-whitespace": "error", //禁止在字符串和注释之外不规则的空白
        "no-obj-calls": "error", //该规则禁止将 Math()、JSON 和 Reflect 对象当作函数进行调用
        // "no-prototype-builtins": "error", //禁止直接调用 Object.prototypes 的内置属性
        "no-regex-spaces": "error", //禁止正则表达式字面量中出现多个空格
        "no-sparse-arrays": "error", //禁用稀疏数组 [1,,2]
        "no-template-curly-in-string": "error", //此规则旨在警告常规字符串包含看起来像模板文字占位符的内容。
        "no-unexpected-multiline": "error", //禁止使用令人困惑的多行表达式 for()、while()、do、if()或else，并且没有{
        "no-unreachable": "error", //禁止在 return、throw、continue和break 语句后出现不可达代码
        "no-unsafe-finally": "error", //禁止在 finally 语句块中出现控制流语句
        "no-unsafe-negation": "error", //此规则不允许否定关系运算符的左操作数。if (!key in object)
        "use-isnan": "error", //要求使用 isNaN() 检查 NaN
        // "valid-jsdoc": "error", //强制使用有效的 JSDoc 注释
        "valid-typeof": ["error", {requireStringLiterals: true}], //强制 typeof 表达式与有效的字符串进行比较

        //这些规则是关于最佳实践的，帮助你避免一些问题
        // "accessor-pairs": "error", //强制 getter 和 setter 在对象中成对出现
        // "array-callback-return": "error", //强制数组方法的回调函数中有 return 语句
        "block-scoped-var": "error", //强制把变量的使用限制在其定义的作用域范围内
        // "class-methods-use-this": "error", //这个规则旨在标记方法里不使用 this
        // "complexity": ["error", 2], //指定程序中允许的最大环路复杂度 if else
        "consistent-return": "error", //要求 return 语句要么总是指定返回的值，要么不指定
        "curly": "error", //强制所有控制语句使用一致的括号风格
        "default-case": "error", //要求 switch 语句中有 default 分支
        // "dot-location": "error", //表达式中点操作符前后的换行符的一致性
        // "dot-notation": "error", //强制尽可能地使用点号 a.b, a['b']
        "eqeqeq": ["error", "always"], //要求使用 === 和 !==
        // "guard-for-in": "error", //要求 for-in 循环中有一个 if 语句
        "no-alert": "error", //禁用 alert、confirm 和 prompt
        // "no-caller": "error", //禁用 arguments.caller 或 arguments.callee
        // "no-case-declarations": "error", //不允许在 case 子句中使用词法声明
        // "no-div-regex": "error", //禁止除法操作符显式的出现在正则表达式开始的位置
        // "no-else-return": "error", //禁止 if 语句中 return 语句之后有 else 块
        "no-empty-function": "error", //禁止出现空函数
        "no-empty-pattern": "error", //禁止使用空解构模式 let {} = foo;
        // "no-eq-null": "error", //禁止 a == null 比较  eqeqeq已限制 a === null
        "no-eval": "warn", //禁用 eval()
        "no-extend-native": "error", //禁止直接修改内建对象的属性
        // "no-extra-bind": "error", //禁止不必要的 .bind() 调用
        // "no-extra-label": "error", //禁用不必要的标签
        "no-fallthrough": "error", //禁止 case 语句落空
        "no-floating-decimal": "error", //禁止数字字面量中使用前导和末尾小数点 .5,5.
        "no-global-assign": "error", //不允许分配给本地对象只读或全局变量
        // "no-implicit-coercion": "error", //禁止使用短符号进行类型转换 ''+1
        // "no-implicit-globals": "error", //禁止在全局范围内使用变量声明和 function 声明
        "no-implied-eval": "error", //禁止 setTimeout("alert('Hi!');",100) 使用字符串参数
        "no-invalid-this": "error", //禁止 this 关键字出现在类和类对象之外
        // "no-iterator": "error", //禁用 __iterator__ 属性
        // "no-labels": "error", //禁用标签语句
        "no-lone-blocks": "error", //禁用不必要的嵌套块
        "no-loop-func": "error", //禁止在循环中出现 function 声明和表达式 现在用es6写法
        // "no-magic-numbers": "error", //确保将具体的数字声明为意义明确的常量
        "no-multi-spaces": "error", //禁止使用多个空格
        "no-multi-str": "error", //禁止使用多行字符串
        // "no-new": "error", //禁止使用new产生副作用
        // "no-new-func": "error", //禁止对 Function 对象使用 new 操作符
        "no-new-wrappers": "error", //禁止对 String，Number 和 Boolean 使用 new 操作符
        "no-octal": "error", //禁用八进制字面量
        // "no-octal-escape": "error", //禁止在字符串中使用八进制转义序列
        "no-param-reassign": "error", //禁止对 function 的参数进行重新赋值
        "no-proto": "error", //禁用 __proto__ 属性 老版本浏览器可能有用
        "no-redeclare": "error", //禁止多次声明同一变量
        // "no-restricted-properties": "error", //禁止某些对象的某些属性  待定研究//TODO
        "no-return-assign": ["error", "always"], //禁止在 return 语句中使用赋值语句
        // "no-return-await": "error", //禁止在 return 语句中使用await
        // "no-script-url": "error", //禁止使用 javascript: url
        "no-self-assign": "error", //禁止自我赋值
        "no-self-compare": "error", //禁止自身比较
        "no-sequences": "error", //禁用逗号操作符
        "no-throw-literal": "error", //禁止抛出异常字面量 throw '111'
        "no-unmodified-loop-condition": "error", //禁用一成不变的循环条件
        // "no-unused-expressions": "error", //禁止出现未使用过的表达式
        "no-unused-labels": "error", //禁用出现未使用过的标签
        // "no-useless-call": "error", //禁止不必要的 .call() 和 .apply()
        // "no-useless-concat": "error", //禁止不必要的字符串字面量或模板字面量的连接
        "no-useless-escape": "error", //禁用不必要的转义字符 /\@/
        "no-useless-return": "error", //不允许多余的返回语句
        // "no-void": "error", //禁用 void 操作符
        // "no-warning-comments": "error", //禁止在注释中使用特定的警告术语
        // "no-with": "error", //禁用 with 语句
        // "prefer-promise-reject-errors": "error", //要求使用Error对象作为Promise拒绝的原因
        // "radix": "error", //强制在parseInt()使用基数参数
        // "require-await": "error", //禁止不具有等待表达式的异步函数
        "vars-on-top": "error", //要求所有的 var 声明出现在它们所在的作用域顶部
        "wrap-iife": ["error", "any"], //需要把立即执行的函数包裹起来
        // "yoda": "error", //要求或禁止 if ("red" === color) 条件
        // "strict": ["error", "global"], //要求或禁止使用严格模式指令

        //这些规则与变量声明有关  //TODO
        // "init-declarations": ["error", "always"], //要求或禁止 var 声明中的初始化
        // "no-catch-shadow": "error", //禁止 catch 子句的参数与外层作用域中的变量同名 IE 8 及更早的版本
        "no-delete-var": "error", //禁止删除变量
        // "no-label-var": "error", //不允许标签与变量同名
        // "no-restricted-globals": ["error", "event"], //禁用特定的全局变量
        "no-shadow": "error", //禁止变量声明与外层作用域的变量同名
        "no-shadow-restricted-names": "error", //禁止将标识符定义为受限的名字 var undefined = "foo";
        "no-undef": "error", //禁用未声明的变量
        "no-undef-init": "error", //禁止初始化值赋 undefined
        "no-undefined": "error", //禁止将 undefined 作为标识符
        "no-unused-vars": "error", //禁止出现未使用过的变量
        "no-use-before-define": "error", //禁止在变量定义之前使用它们

        //这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
        // "callback-return": "error", //强制返回callback函数
        "global-require": "error", //要求 require() 出现在顶层模块作用域中
        // "handle-callback-err": "error", //要求回调函数中有容错处理
        // "no-buffer-constructor": "error", //不允许使用Buffer（）构造函数
        "no-mixed-requires": "error", //禁止 require 调用与普通变量声明混合使用
        "no-new-require": "error", //禁止调用 require 时使用 new 操作符,(除非自定义require,关闭)
        // "no-path-concat": "error", //禁止对 __dirname 和 __filename 进行字符串连接
        // "no-process-env": "error", //禁用 process.env
        // "no-process-exit": "error", //禁用 process.exit() 例（有一部分是负责正确的退出码返回退出）
        // "no-restricted-modules": "error", //禁用通过 require 加载的指定模块 待定
        // "no-sync": "error", //禁止使用同步方法

        //这些规则是关于风格指南
        // "array-bracket-newline": ["error", { "multiline": true }], //在数组括号之前和之后强制执行换行符
        // "array-bracket-spacing": ["error", "always"], //禁止或强制在括号内使用空格 例[ 'foo', 'bar' ]
        // "array-element-newline": ["error", { "multiline": true }], //在每个数组元素之后强制换行
        // "block-spacing": ["error", "always"], //禁止或强制在单行代码块中使用空格
        "brace-style": "error", //强制在代码块中使用一致的大括号风格
        "camelcase": "error", //要求使用骆驼拼写法
        // "capitalized-comments": "error", //强制或禁止注释首字母的大写
        // "comma-dangle": "error", //要求或禁止使用末尾逗号
        // "comma-spacing": ["error", {before: false, after: true}], //强制在逗号周围使用空格
        "comma-style": ["error", "last"], //强制使用一致的逗号风格
        "computed-property-spacing": ["error", "never"], //强制在计算的属性的方括号中使用一致的空格
        // "consistent-this": ["error", "that"], //要求一致的 this，获取嵌套的上下文，consistent-this 是会有问题
        // "eol-last": ["error", "never"], //要求或禁止文件末尾保留一行空行
        // "func-call-spacing": ["error", "always"], //要求或不允许功能标识符与其调用之间的间隔
        // "func-name-matching": "error", //需要函数名称来匹配它们被赋值的变量或属性的名称
        // "func-names": ["error", "as-needed"], //要求或禁止使用命名的 function 表达式
        // "func-style": ["error", "declaration", {allowArrowFunctions: true}], //强制一致地使用 function 声明或表达式
        // "function-paren-newline": ["error", "multiline"], //在函数括号内强制执行一致的换行符
        // "id-blacklist": ["error", "data", "err", "callback"], //禁用指定的标识符
        // "id-length": "error", //强制标识符的最小和最大长度
        // "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"], //要求标识符匹配特定的正则表达式
        // "implicit-arrow-linebreak": ["error", "beside"], //强制执行箭头函数体的位置
        "indent": ["error", 4], //强制使用一致的缩进
        "jsx-quotes": ["error", "prefer-double"], //强制在 JSX 属性中使用一致的单引号或双引号
        "key-spacing": "error", //强制在对象字面量的键和值之间使用一致的空格
        "keyword-spacing": "error", //强制关键字周围空格的一致性
        // "line-comment-position": "error", //强制行注释的位置
        // "linebreak-style": ["error", "unix"], //强制使用一致的换行符风格
        // "lines-around-comment": "error", //强制注释周围有空行
        // "lines-between-class-members": ["error", "never"], //要求或不允许类成员之间的空行
        "max-depth": ["error", 4], //强制块语句的最大可嵌套深度
        // "max-len": ["error", 80], //强制行的最大长度
        // "max-lines": ["error", 2], //强制文件的最大行数
        "max-nested-callbacks": ["error", 3], //强制回调函数最大嵌套深度
        // "max-params": ["error", 3], //限制函数定义中最大参数个数
        // "max-statements": ["error", 10], //限制函数块中的语句的最大数量
        "max-statements-per-line": ["error", {max: 1}], //强制每一行中所允许的最大语句数量
        // "multiline-comment-style": ["error", "starred-block"], //为多行注释强制执行特定的样式
        // "multiline-ternary": ["error", "never"], //在三元表达式的操作数之间强制换行
        "new-cap": "error", //要求构造函数首字母大写
        "new-parens": "error", //要求调用无参构造函数时带括号 例 new Person()
        // "newline-per-chained-call": ["error", {ignoreChainWithDepth: 2}], //要求方法链中每个调用都有一个换行符
        // "no-array-constructor": "error", //禁止使用 Array 构造函数
        // "no-bitwise": "error", //禁止使用按位操作符 例 var x = y | z
        // "no-continue": "error", //禁用 continue
        // "no-inline-comments": "error", //禁止使用内联注释
        "no-lonely-if": "error", //禁止 if 语句作为唯一语句出现在 else 语句块中
        // "no-mixed-operators": "error", //禁止混合使用不同的操作符 例 var foo = a && b || c || d;
        "no-mixed-spaces-and-tabs": "error", //禁止使用 空格 和 tab 混合缩进
        "no-multi-assign": "error", //不允许使用链接的分配表达式 例 var a = b = 5;
        // "no-multiple-empty-lines": "error", //不允许多个空行
        // "no-negated-condition": "error", //禁用否定表达式
        "no-nested-ternary": "error", //禁止使用嵌套的三元表达式
        // "no-new-object": "error", //禁止使用 Object 构造函数
        // "no-plusplus": "error", //禁止使用一元操作符 ++ 和 --
        // "no-restricted-syntax": ["error", "FunctionExpression", "BinaryExpression[operator='in']"], //禁止使用特定的语法
        // "no-tabs": "error", //禁止所有标签
        // "no-ternary": "error", //禁止使用三元操作符
        // "no-trailing-spaces": "error", //该规则禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符）
        // "no-underscore-dangle": "error", //禁止标识符中有悬空下划线
        "no-unneeded-ternary": "error", //禁止可以表达为更简单结构的三元操作符 例 var a = x ? true : false;
        "no-whitespace-before-property": "error", //禁止属性前有空白
        "nonblock-statement-body-position": "error", //强制执行单行报表的位置
        // "object-curly-newline": "error", //强制在花括号内使用一致的换行符
        "object-curly-spacing": "error", //强制在花括号中使用一致的空格
        // "object-property-newline": "error", //强制将对象的属性放在不同的行上
        // "one-var": ["error", "always"], //强制函数中的变量在一起声明或分开声明
        // "one-var-declaration-per-line": ["error", "always"], //要求或禁止在变量声明周围换行
        // "operator-assignment": ["error", "always"], //要求或禁止在可能的情况下使用简化的赋值操作符
        // "operator-linebreak": ["error", "after"], //强制操作符使用一致的换行符风格
        // "padded-blocks": ["error", "never"], //要求或禁止块内填充空行
        // "padding-line-between-statements": ["error", {blankLine: "always", prev: "*", next: "return"}], //声明之间需要或不允许填充行
        // "quote-props": "error", //要求对象字面量属性名称使用引号
        // "quotes": ["error", "double"], //强制使用一致的反勾号、双引号或单引号
        // "require-jsdoc": ["error", {"require": {FunctionDeclaration: true, MethodDefinition: true, ClassDeclaration: true}}], //要求使用 JSDoc 注释
        "semi": ["error", "always"], //要求或禁止使用分号代替 ASI
        // "semi-spacing": "error", //强制分号前后有空格
        "semi-style": ["error", "last"], //强制分号的位置
        // "sort-keys": "error", //要求对象键被排序
        // "sort-vars": "error", //变量排序
        // "space-before-blocks": "error", //要求或禁止语句块之前的空格
        // "space-before-function-paren": "error", //要求或禁止函数圆括号之前有一个空格
        // "space-in-parens": ["error", "never"], //禁止或强制圆括号内的空格
        "space-infix-ops": "error", //要求操作符周围有空格
        // "space-unary-ops": "error", //要求或禁止在一元操作符之前或之后存在空格
        // "spaced-comment": "error", //要求或禁止在注释前有空白
        // "switch-colon-spacing": "error", //强制switch语句的冒号周围的间距
        // "template-tag-spacing": ["error", "never"], //需要或不允许模板标签及其文字之间的间距
        // "unicode-bom": "error", //该规则要求文件始终以 Unicode BOM 字符 U+FEFF 开头
        // "wrap-regex": "error", //要求正则表达式被包裹起来

        //这些规则只与 ES6 有关, 即通常所说的 ES2015
        // "arrow-body-style": ["error", "always"], //要求箭头函数体使用大括号
        // "arrow-parens": "error", //要求箭头函数的参数使用圆括号
        "arrow-spacing": "error", //要求箭头函数的箭头之前或之后有空格
        // "constructor-super": "error", //要求在构造函数中有 super() 的调用
        // "generator-star-spacing": "error", //强制 generator 函数中 * 号周围使用一致的空格
        "no-class-assign": "error", //不允许修改类声明的变量
        // "no-confusing-arrow": "error", //不允许箭头功能，他们可以混淆与比较
        "no-const-assign": "error", //不允许改变用const声明的变量
        "no-dupe-class-members": "error", //不允许类成员中有重复的名称
        "no-duplicate-imports": "error", //禁止重复模块导入
        // "no-new-symbol": "error", //禁止使用 new Symbol() 对象
        "no-restricted-imports": "error", //禁止通过导入加载指定的模块
        "no-this-before-super": "error", //禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-useless-computed-key": "error", //禁止在对象文字中使用不必要的属性键 例（{["a"]: "b"}）
        "no-useless-constructor": "error", //禁用不必要的构造函数
        "no-useless-rename": "error", //不允许将导入，导出和解构分配重命名为相同的名称
        // "no-var": "error", //要求使用 let 或 const 而不是 var
        // "object-shorthand": "error", //要求对象字面量简写语法 例（let a = {x:x},等同于let a = {x}）待定
        // "prefer-arrow-callback": "error", //要求使用箭头函数作为回调 es6写法
        "prefer-const": "error", //要求使用 const 声明那些声明后不再被修改的变量
        // "prefer-destructuring": "error", //var foo = object.foo 用 var { foo } = object;
        // "prefer-numeric-literals": "error", //禁止使用parseInt()来支持二进制，八进制和十六进制文字
        // "prefer-rest-params": "error", //建议使用其余参数而不是arguments
        // "prefer-spread": "error" //要求使用扩展运算符而非 .apply()
        // "prefer-template": "error" //建议使用模板而非字符串连接 例`Hello, ${name}!`
        // "require-yield": "error", //禁用函数内没有yield的 generator 函数
        // "rest-spread-spacing": ["error", "always"], //强化rest和传播运算符及其表达式之间的间隔
        // "sort-imports": "error", //强制模块内的 import 排序
        // "symbol-description": "error", //需要符号描述 例Symbol("some description");
        // "template-curly-spacing": "error", //要求或禁止模板字符串中的嵌入表达式周围空格的使用
        // "yield-star-spacing": "error", //强制在 yield* 表达式中 * 周围使用空格

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};