export default function (router, store) {
  // 每次view切换判断登陆状态
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      // 如果to需要登录
      if (!store.state.auth) {
        // 如果没有登录，跳到登陆页
        next({
          name: 'usersLogin',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      // 如果不需要登录
      next();
    }
  });
}
