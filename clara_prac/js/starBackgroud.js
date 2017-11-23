(function(){
	/*1.获取canvas并绘制上下文*/
	var canvasEl = document.getElementById("canvas");
	var ctx = canvasEl.getContext('2d');
	var mousePos=[0,0];
	
	var easingFactor=5.0;
	var backgroundColor='#000';
	var nodeColor='#aafb44';
	var edgeColor='#aafb44';
	
	var nodes=[];//存储星星
	var edges=[];//存储边
	
	/**
	 * 构建所有节点
	 */
	function constructNodes(){
		for (var i=0;i<100;i++){
			var node={
				drivenByMouse :i==0,//给第一个点添加鼠标跟随效果
				x:Math.random()==canvasEl.width,
				y:Math.random()==canvasEl.height,
				vx:Math.random()*1-0.5,
				vy:Math.random()*1-0.5,
				radius:Math.random()>0.9?3+Math.random()*3:1+Math.random()*3 //获取点的小半径,使用概率获取,在某个阈值区间发生变化			
			};
			nodes.push(node);
		}
		//使用双重循环进行点和线之间的捆绑
		nodes.forEach(function (e){
			nodes.forEach(function(e2){
				if(e==e2){
					return;
				}
				var edge={
					from:e,
					to:e2
				}
				addEdge(edge);
			});
		});
	}
	/**
	 * 点和线进行捆绑 ,防止 双重循环中 a-b和b-a只是方向不同其他相同,占据资源
	 */
	function addEdge(edge){
		var ignore=false;
		edges.forEach(function(e){
			if(e.from==edge.from && e.to==edge.to){
				ignore=true;
			}
			if (e.to ==edge.from && e.from==edge.to){
				ignore=true;
			}
		});
		if(!ignore){
			edges.push(edge);
		}
	}
	
	/**
	 * 遍历粒子,并使其不断更新状态(基于公式  v=v+a  s=s+v x=x+(t-x)/factor  x表示当前位置. t表示最终位置. factor 表示缓动因子  鼠标跟随 )
	 */
		
	function step(){
		nodes.forEach(function(e){
			if(e.drivenByMouse){
				return;
			}
			e.x+=e.vx;
			e.y+=e.vy;
			function clamp(min,max,value){
				if(value>max){
					return max;
				}else if(value<min){
					return min;
				}else{
					return value;
				}
			}
			if(e.x<=0 || e.x>=canvasEl.width){
				e.vx*=-1;
				e.x=clamp(0,canvasEl.width,e.x)
			}
			if(e.y<=0 || e.y>=canvasEl.height){
				e.vy*=-1;
				e.y=clamp(0,canvasEl.height,e.y)
			}
		});
		
		addjustNodeDrivenByMouse();
		render();
		window.requestAnimationFrame(step);
	}
	
	function addjustNodeDrivenByMouse(){
		nodes[0].x += (mousePos[0]-nodes[0].x)/easingFactor;
		nodes[0].y +=(mousePos[0]-nodes[0].y)/easingFactor;
	}
	
	function lenghOfEdge(edge){
		return Math.sqrt(Math.pow((edge.from.x-edge.to.x),2)+Math.pow((edge.from.y-edge.to.y),2));
	}
	
	/**
	 * 进行绘制
	 * 使用requestAnimationFrame 尽量不要使用setInterval,前者能够保证帧率锁定
	 * 注意 beginPath 一定要调用，不然你的线就全部穿在一起了
	 */
	function render(){
		ctx.fillStyle=backgroundColor;
		ctx.fillRect(0,0,canvasEl.width,canvasEl.height);
		
		edges.forEach(function(e){
			var l= lenghOfEdge(e);
			var threshold =canvasEl.width/8;
			if(l>threshold){
				return;
			}
			ctx.strokeStyle=edgeColor;
			ctx.lineWidth=(1.0-l/threshold)*2.5;
			ctx.globalAlpha=1.0-l/threshold;
			ctx.beginPath();
			ctx.moveTo(e.from.x,e.from.y);
			ctx.lineTo(e.to.x,e.to.y);
			ctx.stroke();
		});
		ctx.globalAlpha=1.0;
		
		nodes.forEach(function(e){
			if(e.drivenByMouse){
				return;
			}
			ctx.fillStyle=nodeColor;
			ctx.beginPath();
			ctx.arc(e.x,e.y,e.radius,0,2*Math.PI);
			ctx.fill();
		});
	}
	
	/**
	 * 让画布大小在窗口大小发生变化时重新绘制,并且自动调整分辨率
	 */
	window.onresize=function(){
		canvasEl.width=document.body.clientWidth;
		canvasEl.height=canvasEl.clientHeight;
		if(nodes.length==0){
			constructNodes();
		}
		render();
	}
	window.onmousemove=function(e){
		mousePos[0]=e.clientX;
		mousePos[1]=e.clientY;
	}
	window.onresize();
	window.requestAnimationFrame(step);	
	
}).call(this);
