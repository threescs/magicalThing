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