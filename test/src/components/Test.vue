<template>
  <div>
    <span>{{ msg }}</span> <!-- 我们稍后在store上定义一个msg属性 -->
    <span>{{ count }}</span>
    <button @click='fun'>获取数据</button>    
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'test',
  methods: {
    ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
      'fun', // 我们稍后在src/store/actions.js中创建一个名为fun的方法
    ]),
  },
  computed: {
    ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
      'msg','count' // 我们稍后在src/store/getters.js中创建一个名为msg的方法
    ]),
  }
}
</script>

<style>
	/*这个例子的用意是：
	①、用户点击button,触发绑定在click上的fun方法
	②、fun是定义在actions.js中的，这个方法会调用vue自带的commit方法
	③、commit方法会自动调用mutations中对应的方法
	④、在mutations中更新store上的数据msg,从而Test.vue中的msg自动得到更新*/
</style>