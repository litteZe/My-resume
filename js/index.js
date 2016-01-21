$(document).ready(function(){
	$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4'],
		navigation:true,
		afterLoad:function(link,index){
			switch(index){
				case 1:
					setTimeout(function() {
						//move('.sec1_userPic').set('top','0px').set('border-radius','100px').end();
						move('.sec1_userPic').ease('cubic-bezier(0, .22, 0, 1)').set('top','0px').set('border-radius','100px').duration('1.2s').end();
						move('.section1 .sec_container p:nth-of-type(2)').ease('cubic-bezier(0, .22, 0, 1)').set('margin-left','0px').duration('1s').end();
						move('.section1 .sec_container p:nth-of-type(3)').ease('cubic-bezier(0, .22, 0, 1)').set('margin-left','0px').duration('1s').end();
						move('.section1 .sec_container div:nth-of-type(2)').ease('cubic-bezier(0, .22, 0, 1)').set('width','790px').duration('1s').end();
						move('.section1 .sec_container p:nth-of-type(4)').ease('cubic-bezier(0, .22, 0, 1)').set('margin-top','10px').duration('1s').end();
					},1);
				break;			
			}
		},

		onLeave:function() {
			
		}
	});
});