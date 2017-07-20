
$(function(){
    // 轮播图
    function banner(){
        var imgInfo = [
            {
                bac:"url('images/banner01.jpg')",
                img:"images/banner01.jpg"
            },
            {
                bac:"url('images/banner02.jpg')",
                img:"images/banner02.jpg"
            },
            {
                bac:"url('images/banner03.jpg')",
                img:"images/banner03.jpg"
            },
            {
                bac:"url('images/banner04.jpg')",
                img:"images/banner04.jpg"
            }
        ];
        var isMobile = true;
        var width = $(window).width();
        if(width<768){
            isMobile = true;
        }else{
            isMobile = false;
        };
        var data ={
            isMobile:isMobile,
            json:imgInfo
        };
        var html = template('slider',data);
        $('#inner').html(html);
        //移动触摸事件
        var isMove = false;//是否滑动
        var startX = 0;//初始手指位置
        var moveX = 0;//手指在屏幕上的滑动到的位置
        var distanceX = 0;//滑动的距离

        $('#inner').on('touchstart',function(e){
            startX = e.originalEvent.touches[0].clientX;
        }).on('touchmove',function(e){
            isMove = true;
            moveX = e.originalEvent.touches[0].clientX;
        }).on('touchend',function(){
            distanceX = moveX - startX;
            if(Math.abs(distanceX)>50&&isMove){
                if(distanceX<0){
                    //下一张
                    $('#carousel-example-generic').carousel('next');
                }else if(distanceX>0){
                    //上一张
                    $('#carousel-example-generic').carousel('prev');
                }
            };
            isMove = false;//是否滑动
            startX = 0;//初始手指位置
            moveX = 0;//手指在屏幕上的滑动到
            distanceX = 0;//滑动的距离
        });
    };
   $(window).on('resize',banner).trigger('resize');
//  var height=$('.hm_nav').height();
//  var slider=$('.slide')[0];
//  slider.style.position="fixed";
//	slider.style.top="50px";
//	if( $(window).width()>=768){
//		 	slider.style.position="";
//	       	slider.style.top=0;
//	       	return;
//	}else if( $(window).width()<768){
//		 $(window).on('scroll',function () {
//  	var scrollTop = $(window).scrollTop();
//	        console.log(scrollTop);
//	       if(scrollTop>=height){
//	       	console.log(1);
//	       	slider.style.position="";
//	       	slider.style.top=0;
//	       }else{
//	       	
//	       	slider.style.position="fixed";
//	       	slider.style.top="40px";
//	       }
//	    })
//		 return;
//	}
   
});