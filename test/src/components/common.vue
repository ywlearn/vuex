<template>
	<div>
		<p>我是公用组件</p>
		<p>{{message}}</p>
		<input type="text" v-model="username" @change="setUser" />
		<slot name="nav" v-for="nav in navs" :text="nav.text"></slot>
		<slot name="wise"></slot>
		<slot name="wrong"></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username:"苹果"
			}
		},
		//父组件向子组件传递数据
		props:["message","navs"],
		methods: {
			//子组件向父组件传递数据 通过事件传递
//			setUser: function () {
//				this.$emit('transferUser',this.username)
//			}
			setUser() {
				this.$emit('transferUser',this.username)
			}
			//在 setUser 中，使用了 $emit 来遍历 transferUser 事件，并返回 this.username
			//其中 transferUser 是一个自定义的事件，功能类似于一个中转，this.username 将通过这个事件传递给父组件
		}
		//常常需要在子组件内添加新的内容，这时候可以在子组件内部留一个或者多个插口 <slot>
		//然后在调用这个子组件的时候加入内容 添加的内容就会分发到对应的 <slot> 中
		//<slot> 中还可以作为一个作用域，在子组件中定义变量，然后在父组件中自定义渲染的方式
	}
	
</script>

<style>
</style>