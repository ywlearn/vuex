<template>
	<div id="app">
		<!--普通插值-->
		<p>普通的 {{ message }}</p>
		<p>表达式计算出的 {{ message + 'everyone!' }}</p>
		<!--过滤属性-->
		<p>过滤后的 {{ message | capitalize }}</p>
		<!--计算属性-->
		<p>这是一个计算后的 {{ computed }}</p>
		<!--表达式的结果类型除了字符串之外，还可以是对象或数组-->
		<p v-bind:class="colorfont">绑定了class的 {{ message }}</p>
<!------------------------------------------------------------------------------------------------------------------------------------------------->
		<!--style和class绑定-->
		<p v-bind:class="{ active: isActive, 'danger': hasError }">给class绑定了对象的 {{ message }}</p>
		<p :class="classObj">给class绑定了对象属性的 {{ message }}</p>
		<p :class="classComp">给class绑定了计算属性的 {{ message }}</p>
		<p :class="[activeClass, hasError ? errorClass : '']">给class绑定了数组的 {{ message }}</p>
		<hr>
		<p v-bind:style="{ color: activeColor }">绑定了style的 {{ message }}</p>
		<p :style="styleObj">给style绑定了对象属性的 {{ message }}</p>
		<p :style="styleComp">给style绑定了计算属性的 {{ message }}</p>
		<p :style="[styleObj,anotherStyleObj]">给style绑定了数组的 {{ message }}</p>
<!------------------------------------------------------------------------------------------------------------------------------------------------->
		<!-- 条件渲染 不同的条件显示不一样的页面或者数据-->
		<p v-if="seen===1">现在你看到我了</p>
		<p v-else-if="seen===0">你可以假装看不见我</p>
		<p v-else>现在你真的看不见我了</p>
		<button v-on:click="seen=1">显示文本</button>
		<button v-on:click="seen=0">隐藏文本</button>
		<button v-on:click="seen=''">真的隐藏文本</button>
		<hr>
		<p class="sky">>不带key的条件切换：</p>
		<div v-if="loginType1 === 'username'">
			<label>Username</label>
			<input placeholder="Enter your username">
		</div>
		<div v-else>
			<label>Email</label>
			<input placeholder="Enter your email address">
		</div>
		<button v-on:click="loginType1 = loginType1 === 'username' ? '' : 'username'">切换输入框</button>
		<hr>
		<p class="sky">>带key的条件切换：</p>
		<div v-if="loginType2 === 'username'">
			<label>Username</label>
			<input placeholder="Enter your username" key="username-input">
		</div>
		<div v-else>
			<label>Email</label>
			<input placeholder="Enter your email address" key="email-input">
		</div>
		<button v-on:click="loginType2 = loginType2 === 'username' ? '' : 'username'">切换输入框</button>
<!------------------------------------------------------------------------------------------------------------------------------------------------->
		<h3>列表渲染</h3>
		<p class="sky">>数组列表</p>
		<button type="" v-on:click="todos.push({text: '新任务'});">push</button>
		<ol>
			<li v-for="todo in todos">
				{{ todo.text }}
			</li>
		</ol>

		<p class="sky">>对象列表</p>
		<ul>
			<li v-for="(value,key,index) of object" v-bind:key="index">
				{{ index }}. {{ key }} : {{ value }}
			</li>
		</ul>
<!------------------------------------------------------------------------------------------------------------------------------------------------->
		<h3>事件处理器</h3>
		<p class="sky">>方法处理器</p>
		<button v-on:click="eventObj">event对象</button>
		<p class="sky">>内联处理器</p>
		<button v-on:click="say('hi')">Say hi</button>
		<p class="sky">>事件修饰符</p>
		<div v-on:click="say('father')" :style="{border:'1px solid #000'}">
			父元素
			<button @click="say('child',$event)">子元素</button>
			<button @click.stop="say('stop-child')">阻止了冒泡的子元素</button>
		</div>
		<p class="sky">>按键修饰符</p>
		<input v-on:keyup.enter="say('刚按了一下回车')">
<!------------------------------------------------------------------------------------------------------------------------------------------------->
		<h3>表单控件绑定  v-model</h3>
		<!--单行文本-->
        <p class="sky">>你输入的是：{{ message }}</p>
        <input v-model="message">
        <hr>
        <!--多行文本-->
        <p class="sky">>你输入的多行文本:</p>
        <p style="white-space: pre">{{ texts }}</p>
        <textarea v-model.lazy.trim="texts" placeholder="多行文本也没问题"></textarea>
        <hr>
        <!--复选框checkbox-->
        <p class="sky">>单个复选框，逻辑值：</p>
        <input type="checkbox" id="checkbox1" v-model="checked">
        <label for="checkbox1">{{ checked }}</label>
        <hr>
        <p class="sky">>单个复选框，绑定值：</p>
        <input type="checkbox" id="checkbox2" v-model="checkValue" v-bind:true-value="checka" v-bind:false-value="checkb">
        <label for="checkbox2">{{ checkValue }}</label>
        <hr>
        <p class="sky">>多个复选框，绑定到同一个数组：</p>
        <input type="checkbox" id="libai" value="李白" v-model="checkedNames">
        <label for="libai">李白</label>
        <input type="checkbox" id="lanlingwang" value="兰陵王" v-model="checkedNames">
        <label for="lanlingwang">兰陵王</label>
        <input type="checkbox" id="mike" value="马可波罗" v-model="checkedNames">
        <label for="mike">马可波罗</label>
        <p>选中的英雄: {{ checkedNames }}</p>
        <hr>
        <!--单选框radio-->
        <p class="sky">>单选按钮：</p>
        <input type="radio" id="one" value="貂蝉" v-model="picked">
        <label for="one">貂蝉</label>
        <br>
        <input type="radio" id="two" v-bind:value="radio1" v-model="picked">
        <label for="two">吕布</label>
        <br>
        <span>你选择了{{ picked }}</span>
        <hr>
        <!--选择列表select-->
        <p class="sky">>选择列表：</p>
        <select v-model="selected">
            <option>刺客</option>
            <option>战士</option>
            <option>法师</option>
            <option>辅助</option>
        </select>
        <span>选择的职业: {{ selected }}</span>
        <hr>
        <p class="sky">>多选列表：</p>
        <select v-model="selList" multiple style="width: 150px">
            <option>破军</option>
            <option>泣血</option>
            <option>复活甲</option>
        </select>
        <br>
        <span>选择的装备: {{ selList }}</span>
        <hr>
        <p class="sky">>动态选项：</p>
        <select v-model="selText">
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>你选择了: {{ selText }}</span>
        <hr>
	</div>
</template>

<script>
	export default {
		name: 'filterAndMustache',
		data() {
			return {
				message: 'hello world!',
				colorfont: 'sky',
				// 设定class的属性
				isActive: true,
				hasError: false,
				classObj: {
					active: false,
					danger: true
				},
				activeClass: 'active',
				errorClass: 'danger',
				// 设定style的属性
				activeColor: 'blue',
				styleObj: {
					color: 'purple',
					fontSize: '26px'
				},
				anotherStyleObj: {
					backgroundColor: 'pink',
					padding: '5px'
				},
				seen: 1,
				loginType1: 'username',
				loginType2: '',
				todos: [{
						text: '学习 JavaScript'
					},
					{
						text: '学习 Vue'
					},
					{
						text: '完成整个项目'
					}
				],
				object: {
					FirstName: 'John',
					LastName: 'Doe',
					Age: 30
				},
				texts: '',
                checked: false,
                checkValue: null,
                checka: '选中了',
                checkb: '没选中',
                checkedNames: [],
                picked: '吕布',
                radio1: '吕布',
                selected: null,
                selList: [],
                selText: '大乔',
                options: [{
                        text: '刺客',
                        value: '荆轲'
                    },
                    {
                        text: '辅助',
                        value: '大乔'
                    },
                    {
                        text: '战士',
                        value: '哪吒'
                    }
                ]
			}
		},
		filters: { //过滤器
			capitalize: function(value) {
				if(!value) return '';
				value = value.toString();
				return value.toUpperCase();
			}
			
		},
		computed: { //计算属性
			//计算属性就是当其依赖属性的值发生变化时，这个属性的值也会自动更新，与之相关的DOM部分也会同步更新。
			computed: {
				get: function() {
					// 'this' 指向 app 实例
					return this.message.toUpperCase();
				},
				set: function(newValue) {
					this.message = newValue;
				}
			},
			classComp: function() {
				return {
					active: this.isActive && !this.hasError,
					'danger': this.hasError && !this.isActive
				}
			},
			styleComp: function() {
				return {
					color: this.isActive ? 'orange' : 'black'
				}
			}
		},
		methods: {
			eventObj: function(event) {
				this.message = '<' + event.target.tagName + '>' + this.message
			},
			say: function(message, event) {
				if(event) message = message + event.target.tagName;
				alert(message);
			}
		}
	}
</script>

<style>
	body {
		font-family: "Microsoft Yahei", "consolas", Arial, sans-serif, "San Francisco";
	}
	
	.sky {
		color: blue;
	}
	
	.active {
		color: green;
	}
	
	.danger {
		color: #EF3731;
	}
</style>