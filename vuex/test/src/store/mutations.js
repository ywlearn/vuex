/*export const getMsg = (state,payload) => {
	state.msg = payload.msg;
}*/
export const increment = (state) => {
	state.count++
}
//只是简单的把最新得到的msg赋给state上的msg属性
/*export const showUserName(state) {
	alert(state.user_name);
}*/
//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
//你不能直接调用一个 mutation handler。
//这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。
//”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
