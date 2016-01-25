function big(){
		var cir=document.getElementById("circles-1");
		cir.update(cir._value + 10, 250);
}
	
$(document).ready(function(){
	
	
	$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4'],
		navigation:true,
		afterLoad:function(link,index){
			switch(index){
				case 1:					
					move('.sec1_userPic').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','0px').set('border-radius','100px').duration('1.2s').end();
					move('.section1 .sec_container p:nth-of-type(2)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-left','0px').duration('1s').end();
					move('.section1 .sec_container p:nth-of-type(3)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-left','0px').duration('1s').end();
					move('.section1 .sec_container div:nth-of-type(2)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','790px').duration('1s').end();
					move('.section1 .sec_container p:nth-of-type(4)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-top','10px').duration('1s').end();
				break;
				case 2:
					move('.sec2_introduce h2').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('font-size','32px').duration('0.7s').end();
					move('.sec2_timeLine .line1 .rightCol time').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('left','0px').duration('0.7s').delay('0.3').end();
					move('.sec2_timeLine .line2 .leftCol time').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('right','0px').duration('0.7s').delay('0.1').end();
					move('.sec2_timeLine .line3 .rightCol time').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('left','0px').duration('0.7s').delay('0.2').end();
					move('.sec2_timeLine .line4 .leftCol time').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('right','0px').duration('0.7s').end();					
					break;
				case 3:
					var myCircle = Circles.create({
					  id:                  'circles-1',
					  radius:              60,
					  value:               63,
					  maxValue:            100,
					  width:               10,
					  text:                function(value){return value + '%';},
					  colors:              ['#FCE6A4', '#EFB917'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-2',
					  radius:              60,
					  value:               65,
					  maxValue:            100,
					  width:               10,
					  text:                function(value){return value + '%';},
					  colors:              ['#BEE3F7', '#45AEEA'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-3',
					  radius:              60,
					  value:               68,
					  maxValue:            100,
					  width:               10,
					  text:                function(value){return value + '%';},
					  colors:              ['#F8F9B6', '#D2D558'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-4',
					  radius:              60,
					  value:               60,
					  maxValue:            100,
					  width:               10,
					  text:                function(value){return value + '%';},
					  colors:              ['#F4BCBF', '#D43A43'],
					  duration:            400,					  
					});
					break;
			}
		},

		onLeave:function(link,index) {
			switch(index){
				case 1:
					move('.sec1_userPic').set('top','-100px').set('border-radius','50px').end();
					//move('.section1 .sec_container p:nth-of-type(2)').set('margin-left','-800px').end();
					//move('.section1 .sec_container p:nth-of-type(3)').set('margin-left','800px').end();
					move('.section1 .sec_container div:nth-of-type(2)').set('width','1200px').end();
					move('.section1 .sec_container p:nth-of-type(4)').set('margin-top','50px').end();
				break;
			}
						
		}
	});
});