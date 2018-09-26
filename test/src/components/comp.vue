<template>
	<div>
		{{message}}
		<p>组件注册主要分全局注册和局部注册。</p>
		<p>全局组件通常使用 Vue.component(tagName, {options})的格式注册。
			局部组件则在实例中的components中注册。组件在注册之后，便可以在
			父实例的模块中以自定义元素
			<'my-component>'</'my-component'> 的形式使用。要确保在初始化根实例
			之前注册了组件。</p>
		<pre>
			
		</pre>
		<p>要让子组件使用父组件的数据，我们需要通过子组件的props选项.</p>
		<h3>生命周期</h3>
		<p>
			每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如，实例需要
			配置数据观测(data observer)、编译模版、挂载实例到 DOM ，然后在数据
			变化时更新 DOM 。在这个过程中，实例也会调用一些 生命周期钩子 ，这就
			给我们提供了执行自定义逻辑的机会。
			当前版本的Vue定义了8个生命周期钩子：beforeCreate（创建前）, created（
			创建完成）, beforeMount（挂载前）, mounted（挂载完成）, beforeUpdate（
			更新前）, updated（更新完成）, beforeDestroy（销毁前）, destroyed（销毁完成）。
		</p>
		<common @transferUser="getUser" :navs="navs" :message="message">
			<h1>不具名插口</h1>
			<h2 slot="wise">这里对应wise插口</h2>
			<h3 slot="wrong">这里对应wrong插口</h3>
			<template slot="nav" scope="props">
				<li>{{props.text}}</li>
			</template>
		</common>
		<p>用户名为： {{user}}</p>
		<h2>动态组件</h2>
			<button @click="check1">组件1</button>
			<button @click="check2">组件1</button>
			<button @click="check3">组件1</button>
			<component v-bind:is="tableView"></component>
		<h2>递归组件</h2>
	</div>
</template>

<script>
	import common from '@/components/common'
	import simple01 from '@/components/simple01'
	import simple02 from '@/components/simple02'
	import simple03 from '@/components/simple03'
	import axios from 'axios'
	export default {
		data() {
			return {
				message:"组件注册",
				user:"",
				navs:[{text:1},{text:2},{text:3}],
				tableView: 'simple01'
			}
		},
		//引入子组件
		components:{
			common,
			simple01,
			simple02,
			simple03
		},
		//引入组件的另一种写法
		//components:{
//		simpleComponent:simple	
//		}
		methods: {
			getUser(msg) {
				this.user = msg
			},
			check1() {
				this.tableView = "simple01";
			},
			check2() {
				this.tableView = "simple02"; 
			},
			check3() {
				this.tableView = "simple03";
			}	
		},
		created() {
			console.log(1)
		}
		//在父组件中，声明了一个方法 getUser，用 transferUser 事件
		//调用 getUser 方法，获取到从子组件传递过来的参数 username
		//子组件向子组件传递数据使用Vuex
		
		//slot的内容分发
		//首先在子组件中添加 <slot>，并在子组件中定义了数组变量 navs
		//然后在父组件中以作用域 <template> 添加内容，其中 scope 是
		//固有属性，它的值对应一个临时变量 props
		//而 props 将接收从父组件传递给子组件的参数 navs 
		/*-------------------------------------*/
		//动态组件
		//Vue 还可以将多个子组件，都挂载在同一个位置，通过变量来切换组件，实现 tab 菜单这样的效果
		//Vue 自身保留的 <component> 元素，可以将组件动态绑定到 is 特性上，从而很方便的实现动态组件切换
		//但这样一来，每次切换组件都会重新渲染，无法保留组件上的数据。这时可以使用 keep-alive 将组件保留在内存中，避免重新渲染
		//递归组件
//		当组件拥有 name 属性的时候，就可以在它的模板内递归的调用自己，这在开发树形组件的时候十分有效
	}
</script>

<style>
</style>