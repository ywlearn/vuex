export const msg = (state) => state.msg;
export const count = (state) => state.count;

//就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。