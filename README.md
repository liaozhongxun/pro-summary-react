# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 配置项目信息
1. icon、logo图标，标题
2. 配置jsconfig.json 友好的代码提示 (这个json是可以注释的，vscode有特殊处理)
3. src 下目录结构划分
   1. assets 存放一些静态资源、网络字体等
   2. components 公共组件抽取
   3. common/base-ui 自定义的公用文件封装，多个项目统通用的组件、方法
   4. hooks 存放hook函数
   5. router
   6. service 网络请求 接口统一调用
   7. store 状态管理
   8. utils 第三方库文件
   9. view/pages 页面视图文件
   10. mock 模拟数据
   11. layout（管理系统布局配置）
4. webpack配置别名 `@ => src`
   1.   `npm run eject`导出webpack文件直接配置
   2.   craco 
        1.   `npm install @craco/craco -D`
        2.   创建 `craco.config.js` 进行配置
        3.   将 `package.json` 中指令的 `react-scripts dev` 换成 `craco dev` 关联起来
5. CSS样式重置
   1. [normalize.css](https://github.com/necolas/normalize.css) 
      1. 有大佬们总结出来，一般开发一个前端项目对一些常见的css自动重置的
      2. `npm install normalize.css --save`
      3. main.js `import "normalize.css"`
   2. reset.css/base.css
      1. 自己初始化一些东西
   3. common.css 
      1. 公共样式
6. SCSS/LESS配置
   1. SASS 安装 `npm install sass -D`  安装好就行了
   2. LESS 
       1. 安装 `npm i craco-less@2.1.0-alpha.0 -D` 安装好就行了
       2. `craco.config.js`中 通过plugins 使用起来
7. 配置路由
   1. `npm install react-router-dom`
   2. 最外层导入 hash或history模式，包裹APP
   3. 需要的地方从 `react-router-dom`拿响应的组件
8. redux
      1. 
      
9. 必要配置
      1.  字体图标、移动端适配、。。。

10. react 常用ui框架 `Ant Design of Reacr`