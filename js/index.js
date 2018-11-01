window.onload=function () {
    //////////////////////////////轮播图
    //轮播图
    let banner=$(".banner");
    let imgs=$(".banner .banner-box img");
    let dots=$(".banner .dot .banner-dot");

    let now=0;
    let flag=true;

    let t = setInterval(move,2000);
    imgs.first().css("opacity", 1);
    dots.eq(0).addClass("active");
    function move() {
        if(now==imgs.length-1){
            now=-1;
        }
        now++;
        imgs.css("opacity", 0).eq(now).css({opacity:1},function () {
            flag=true;
        });
        dots.removeClass("active").eq(now).addClass("active");

    }
    function moveL() {
        if(now<0){
            now=4;
        }
        now--;
        imgs.css("opacity", 0).eq(now).css({opacity:1},function () {
            flag=true;
        });
        dots.removeClass("active").eq(now).addClass("active");

    }
    banner.mouseenter(function () {
        // if(flag==false){
        //     return;
        // }
        // flag=false;
        clearInterval(t)
    });
    banner.mouseleave(function () {
        t=setInterval(move,2000);
    });
    dots.click(function () {
        let i = $(this).index();
        imgs.css("opacity", 0).eq(i).css("opacity", 1);
        dots.removeClass("active").eq(i).addClass("active");
        now=i;

    })


    ////////////////////////////////轮播图列表
    $(".banner .list .list-box").mouseenter(function () {
        let i =$(this).index();
        $(".son").css("display","none").eq(i).css("display","block");
    });
    $(".banner .list .list-box").mouseleave(function () {
        let i =$(this).index();
        $(".son").css("display","none");
    });


    //////////////////////////////////////
    ///返回顶部
    let fanhui=$(".aalis");
    let wh = window.innerHeight;
    $(window).scroll( function() {
        let sh=document.body.scrollTop || document.documentElement.scrollTop;
        if(sh>800){
            fanhui.css("display","block");
        }else{
            fanhui.css("display","none");
        }
    });
    fanhui.click(function () {
        // document.body.animate({scrollTop:0},1000);
        animate(document.body,{scrollTop:0},800);
        animate(document.documentElement,{scrollTop:0},800);
    })


}