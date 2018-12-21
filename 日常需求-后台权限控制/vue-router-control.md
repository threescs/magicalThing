# 记一次在vue项目中动态控制admin路由权限

## 需求背景: 不同角色进入管理后台后, 生成角色所拥有权限的菜单

### 思路分析: 根据后台返回角色权限列表, 对页面所有菜单进行匹配, 动态生成路由

## 技术栈 vue-router + vuex + vue-router-control(这里我已经将匹配逻辑封装成一个插件, 欢迎大家测试) 


```javascript

main.js
// 拿取用户token及用户权限内路由
  if (to.path === '/login') {
      next({ path: '/' });
    } else if (!store.getters.privileges || (store.getters.privileges && store.getters.privileges.length === 0)) { // 判断当前用户是否已拉取完user_info信息
      store.dispatch('GetUserInfo').then((res) => { // 拉取info
        const privilegesArr = store.getters.privileges;
        store.dispatch('GenerateRoutes', { privilegesArr }).then(() => { // 生成可访问的路由表
          router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
          next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        });
      }).catch((err) => {
        console.log(err);
      });
    } else if (hasPermission(store.getters.privileges, to.meta.privileges)) {
      next();
    } else {
      next({ path: '/401', replace: true, query: { noGoBack: true } });
    }
```
### 接下来我们在store定义两个modules分别是user和permission user代码如下

```javascript
const user = {
  state: {
    user: '',
    roles: [],
    privileges: [],
  },

  mutations: {
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PRIVILEGES: (state, privileges) => {
      state.privileges = privileges;
    },
  },
  actions: {
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        loginService.getUserInfo("5bbc16e6f736b14af881efac").then((response) => {
          const data = response.result.data || response.data;
          const roleArr = ['admin'];
          const privilegesArr = [];
          if (data && data.length > 0) {
            data.forEach((item) => {
              privilegesArr.push(item.menuId);
            });
          }
          commit('SET_ROLES', roleArr);
          commit('SET_PRIVILEGES', privilegesArr); //用户权限PrivilegesArr数组 
          resolve(response.result.data || response.data);
        }).catch((error) => {
          alert("服务器繁忙请稍后再试");
          reject(error);
        });
      });
    },
  },
  ```

  ### 接下来是permission 匹配权限逻辑

  ``` javascript
  //这边直接引入 vue-router-control
  import {filterAsyncRouter } from 'vue-router-control'
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers); //将匹配到的router与默认首页拼接,获取到此用户权限内路由
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { privilegesArr } = data;
        // let accessedRouters
        // if (roles.indexOf('ROLE_admin') >= 0) {
        //   accessedRouters = asyncRouterMap
        // } else {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, privilegesArr);
        // }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    },
  },
  ```