/*practice for vue.js*/
$(function(){
	
	var app = new Vue({
	el:'#app',
	data:{
		message:'Hello Vue!'
	}
	});
	var app2= new Vue({
		el:'#app2',
		data:{
			mes:'页面加载于'+new Date().toLocaleString()
		}
	});
	var app3 = new Vue({
		el:'#app3',
		data:{
			seen:true
		}
	});
	var app4 = new Vue({
		el:'#app4',
		data:{
			todos:[
				{text:'学习JavaScript'},
				{text:'学习vue'},
				{text:'学习整个牛项目'}
			]
		}
	});
	var app5 = new Vue({
		el:'#app5',
		data:{
			message:'Hello Vue.js!'
		},
		methods:{
			reverseMessage:function(){
				this.message=this.message.split('').reverse().join();
			}
			
		}
	});
})
