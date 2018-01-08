import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';

/*actions.js – vuex核心之一 
getters.js – 一个方便的工具级接口，可以方便的构建全局state自定义方法 
index.js – 最终所有的部分都汇聚到此，这就是store对象 
mutations.js – 改变store中各个数据的唯一方法 
rootState.js – 这是我自己弄的，只是把store中的各个数据都保存在这里，方便查看，不然全都放到上面的index.js，那文件里面有点乱*/
//注：官方一些例子中，还有modules，即模块，用于分担store的压力，因为项目大了之后，数据多，状态多，所以把store分成多个module,每
//个module都有自己的actions,getters,mutations等，最终在index.js中全部合并。但目前我不想这么做。

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store;