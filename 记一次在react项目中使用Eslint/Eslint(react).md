# 记一次在react项目中使用Eslint

## 1. 安装 Eslint
### 首先, 先安装Eslint到项目本地(全局安装也OK) 

终端
``` 
npm --save-dev install eslint
```
安装完成之后，我们先创建基础的 .eslintrc.yml （建议使用 .yml 格式，json/js 格式也可以）：
```
./node_modules/.bin/eslint --init ## 全局安装，可用 `eslint --init`
```
输入上述命令之后，会出现询问界面：
```
? How would you like to configure ESLint? (Use arrow keys)
  Use a popular style guide
❯ Answer questions about your style
  Inspect your JavaScript file(s)
```

选择“Answer questions about your style”，后面有一些问题，根据实际进行选择。

上述操作完成之后，会帮我们创建一个基础的 .eslintrc.yml 文件。我们也可以使用 touch .eslintrc.yml 自行创建。

## 2. 安装 babel-eslint

由于项目中需要使用到 ES2015 的语言规范，因此需要安装 babel-eslint ：
```
npm install --save-dev babel-eslint
```

安装完成之后，我们需要在 .eslintrc.yml 中修改配置
```
parser: "babel-eslint"
```
**【注意】：若没有该项，曾手动增加**

## 3. 安装 eslint-plugin-react
项目中需要使用 React 框架，需要识别出 React 特定的语法规则和要求，需要安装 eslint-plugin-react ：

```
npm install --save-dev eslint-plugin-react
```

安装完成之后，我们需要引入该 Eslint 组件。修改 .eslintrc.yml 配置：
```
plugins:
  - react
```
  **YML语法规则中表示数组格式：- 开头，后面为数组元素，如此处的 react。属性值中若不含特殊字符，可以不加上双引号。**
例如：
```
"plugins": [
    "react"
]
```
## 4. 安装 Airbnb
到现在为止，我们只使用了一些默认创建的校验规则，为了避免我们自己按照 Eslint 的规则一个一个来个性化定制规则，很是麻烦。这里我们使用 GitHub – airbnb/javascript: JavaScript Style Guide 规范来定义规则。这就需要安装如下插件：
```
npm i --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
```
接着，我们修改 .eslintrc.yml 配置，将扩展插件变更为 Airbnb ：
```
extends: "airbnb"
```

**到此，静态代码检查工具安装结束。**

### 检查 Git 提交的代码
除了静态代码检查，我们还设置一道关卡来保证提交的代码符合规范。这就需要使用到我们主角 pre-commit 钩子。
这里假设项目中使用 Git 进行代码的提交操作 。

1.首先在 package.json 中增加如下脚本指令：
```
{
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx src"
  }
}
```
**结尾的src就是Eslint需要检查的目录(自行修改)**

2.然后，安装 pre-commit ，以便检查提交操作：

先在命令行中执行： 
```
npm install --save-dev pre-commit
```
然后在**package.json**中增加下面的配置（以下commit进行检查，push雷同）

```
{
  "pre-commit": [
    "lint"
  ]
}
```
#遇到的问题

##1.代码检查, .js文件不支持jsx

```
error  JSX not allowed in files with extension '.js'  react/jsx-filename-extension
```

此时需要增加配置以便支持在 .js 文件中支持使用 JSX 语法。

```
rules:
  react/jsx-filename-extension: 
    - warn
    - extensions:
      - ".js" # .js 文件适用
      - ".jsx"
```

##2. 代码中 process.env 报错

将node_module删掉， 重新npm install 就OK。 