$(function(){

    var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"http://www.lywas.cn/list.php?fid=9\"><div class=\"btn btn-tz\"></div></a><a href=\"http://m.lywas.cn/yuyueweb\"><div class=\"btn btn-dt\"></div></a><a href=\"http://www.lywas.cn/list.php?fid=79\"><div class=\"btn btn-phone\"></div></a><div class=\"btn btn-top\"></div></div>";
    $("#rightnav").html(tophtml);
    $("#izl_rmenu").each(function(){
        $(this).find(".btn-phone").mouseenter(function(){
            $(this).find(".phone").fadeIn("fast");
        });
        $(this).find(".btn-phone").mouseleave(function(){
            $(this).find(".phone").fadeOut("fast");
        });
        $(this).find(".btn-top").click(function(){
            $("html, body").animate({
                "scroll-top":0
            },"fast");
        });
    });
    var lastRmenuStatus=false;
    $(window).scroll(function(){//bug
        var _top=$(window).scrollTop();
        if(_top>200){
            $("#izl_rmenu").data("expanded",true);
        }else{
            $("#izl_rmenu").data("expanded",false);
        }
        if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
            lastRmenuStatus=$("#izl_rmenu").data("expanded");
            if(lastRmenuStatus){
                $("#izl_rmenu .btn-top").slideDown();
            }else{
                $("#izl_rmenu .btn-top").slideUp();
            }
        }
    });
});/**
 * Created by lamco on 2017/7/6.
 */
