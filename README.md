# TypeScript

## TypeScript 学习笔记

### 认识TypeScript

TS 是 JS javascript 的一个超集

安装NodeJs 

安装解析TS的工具包

1. ` npm i -g typescript ` 使用npm全局进行安装
2. 该工具包提供了` tsc `命令 实现了TS -> JS的转化
3. 生成js文件后 使用 ` node ` 命令执行js文件

简化执行ts文件

1. 全局安装ts-node ` npm i -g ts-node ` 使用ts-node包 内部转化js 然后再执行

### TS 基础内容

1. 注释 单行注释 多行注释
2. 输出语句 console.log()

### TS 变量和数据类型

1. 变量 存储数据的容器 保温杯里泡枸杞，变量里面存数据
   1. 声明变量并制定类型 `let age: number`
   2. 给变量赋值 ` age = 18 `
   3. 简化方式 声明变量的同时并赋值 ` let age: number = 18 `
   4. 注意：声明变量的时候要**指定变量的类型**
   5. 类型注解：约定了什么类型，就只能给变量赋值什么类型 
   6. 变量名称只能出现：数字、字母、下划线(_)、美元符号($) 并且不能以 数字 开头
2. 数据类型
   1. 原始类型（基本数据类型）
      1. **number**
         1. 数字类型：包含整数值和浮点型值
      2. **string**
         1. 字符串：由零个或者多个字符串串联而成的，用来表示文本信息
      3. **boolean**
         1. 布尔类型：用来表示**真**或**假**
      4. undefined
         1. 表示声明但未赋值的变量值（找不到值）
      5. null
         1. 表示声明了变量也赋值了值，值为null(能找到，值就是null)
   2. 对象类型（复杂数据类型）
3. 运算符
   1. 算术运算符
      1. 加减乘除
         1. 字符串前面添加+号，可以将string转化为nuber(只有字符串内容为数字时才有意义)
         2. 加号可以和字符串一起使用，起到拼接的作用
   2. 赋值运算符
      1. 等号 右边的值赋值给左边的变量
   3. 递增、递减运算符
      1. 自增和自减 只能让变量的值增加或减少1
         1. 自增(++) 运算符是+= 1的简化形式
         2. 自减(--) 运算符是-= 1的简化形式
   4. 比较运算符
      1. 用于比较两个数据的值，并返回其比较的结果，结果为布尔类型
      2. 常见的比较运算符有以下几种：
         1. 大于 (>)
         2. 大于等于(>=)
         3. 小于 (<)
         4. 小于等于 (<=)
         5. 等于 (===)
         6. 不等于 (!==)
   5. 逻辑运算符
      1. 与(&&) 或(||) 非(!) 逻辑运算符通常用于布尔类型的计算，并且结果也是布尔类型
4. 语句
   1. 条件语句
      1. 根据判断条件的结果(真或假),来执行不同的代码，从而实现不同的功能
      2. if语句
   2. 三元运算符
   3. 循环语句
   4. 断点调试
   
