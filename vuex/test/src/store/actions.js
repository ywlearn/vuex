import reqwest from 'reqwest';
//reqwest, 一个封装了promise的异步请求插件
//需要 cnpm install reqwest --save

/*export const fun = ({commit}) => {
	reqwest({
		url:``,//地址
		method:'post',
		contenType:'application/json',
		crossOrigin:true,
		data:'',
		dataType:'json',
	}).then(msg => {
		commit({
			type:'getMsg',// 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
			msg,// 成功后把得到的数据通过commit传入mutations
		})
	})
}*/

export const fun = (context) => {
	context.commit('increment')
}

//Action提交的是mutation，而不是直接变更状态
//Action 可以包含任意异步操作