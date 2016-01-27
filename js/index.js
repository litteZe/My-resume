function big(){
		var cir=document.getElementById("circles-1");
		cir.update(cir._value + 10, 250);
}
	
$(document).ready(function(){
	
	
	$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4','page5','page6'],
		navigation:true,
		loopBottom:true,
		autoScrolling:true,
		paddingTop:'5px',
		//scrollOverflow:true,
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
					  value:               170/3,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#FCE6A4', '#EFB917'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-2',
					  radius:              60,
					  value:               190/3,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#BEE3F7', '#45AEEA'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-3',
					  radius:              60,
					  value:               195/3,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#F8F9B6', '#D2D558'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-4',
					  radius:              60,
					  value:               215/3,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#F4BCBF', '#D43A43'],
					  duration:            400,					  
					});
					move('.sec3 .sec_container').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('border-radius',"30px 5px").set('width',"85%").duration('0.7s').delay('0.3').end();
					move('.show1 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show2 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show3 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show4 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show5 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show6 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show7 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show8 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show9 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show10 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show11 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.show12 .bar_percent').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('opacity',"1").duration('0.7s').delay('0.3').end();
                    move('.list_icon .show1 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','50%').duration('0.7s').end();
                    move('.list_icon .show2 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show3 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show4 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show5 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show6 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','70%').duration('0.7s').end();
                    move('.list_icon .show7 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show8 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','70%').duration('0.7s').end();
                    move('.list_icon .show9 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','65%').duration('0.7s').end();
                    move('.list_icon .show10 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','60%').duration('0.7s').end();
                    move('.list_icon .show11 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','70%').duration('0.7s').end();
                    move('.list_icon .show12 .list_bar_rate').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','85%').duration('0.7s').end();
					break;
				case 4:
					move('.works1 .works_bg').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('transform','scale(1)').duration('0.7s').end();
					move('.works2 .works_bg').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('transform','scale(1)').duration('0.7s').end();
					move('.works3 .works_bg').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('transform','scale(1)').duration('0.7s').end();
					move('.works4 .works_bg').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('transform','scale(1)').duration('0.7s').end();
					move('.works5 .works_bg').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('transform','scale(1)').duration('0.7s').end();
					move('.works1 .works_info').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','-75px').duration('0.7s').end();
					move('.works2 .works_info').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','-75px').duration('0.7s').end();
					move('.works3 .works_info').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','-75px').duration('0.7s').end();
					move('.works4 .works_info').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','-75px').duration('0.7s').end();
					move('.works5 .works_info').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','-75px').duration('0.7s').end();
				break;
				case 5:
					move('.contact1 .contactLink').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('background-position-y','-100px').duration('0.7s').delay('0.1').end();
					move('.contact2 .contactLink').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('background-position-y','-300px').duration('0.7s').delay('0.2').end();
					move('.contact3 .contactLink').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('background-position-y','-500px').duration('0.7s').delay('0.3').end();
					move('.contact4 .contactLink').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('background-position-y','-700px').duration('0.7s').delay('0.4').end();
					move('.contact5 .contactLink').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('background-position-y','-900px').duration('0.7s').delay('0.5').end();
				break;
				case 6:
					move('.sec6_title h1').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('font-size','120px').duration('0.7s').end();
				break;
			}
		},

		onLeave:function(link,index) {
			switch(index){
				case 1:
					move('.sec1_userPic').set('top','-100px').set('border-radius','50px').end();
					move('.section1 .sec_container div:nth-of-type(2)').set('width','1200px').end();
					move('.section1 .sec_container p:nth-of-type(4)').set('margin-top','50px').end();
				break;

				case 3:
					var myCircle = Circles.create({
					  id:                  'circles-1',
					  radius:              60,
					  value:               0,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#FCE6A4', '#EFB917'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-2',
					  radius:              60,
					  value:               0,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#BEE3F7', '#45AEEA'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-3',
					  radius:              60,
					  value:               0,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#F8F9B6', '#D2D558'],
					  duration:            400,					  
					});
					var myCircle = Circles.create({
					  id:                  'circles-4',
					  radius:              60,
					  value:               0,
					  maxValue:            100,
					  width:               13,
					  text:                function(value){return value + '%';},
					  colors:              ['#F4BCBF', '#D43A43'],
					  duration:            400,					  
					});
				break;
			}
						
		}
	});
});