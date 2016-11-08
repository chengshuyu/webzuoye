$(function(){
    var imgs=$(".bann",$(".ban")[0]);  //获取元素
    var list=$("li",$(".btn")[0]);
    var dian=$(".bannerbox")[0];
    var lefts=$(".leftbtn")[0];
    var rights=$(".rightbtn")[0];
    var num=0;

    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left="1349px"
    };

    var now=0;
    var next=0;
    function move(type){
        type=type||"right"

        if(type=="right"){
            next++;
            if(next>=imgs.length){
                next=0;
            }
            imgs[next].style.left="1349px";
            animate(imgs[now],{left:-1349});
        }else if(type=="left"){
            next--;
            if(next<=-1){
                next=imgs.length-1;
            }
            imgs[next].style.left="-1349px";
            animate(imgs[now],{left:1349});
        }

        imgs[now].style.left="0px";

        animate(imgs[next],{left:0});
        list[next].className="list active";
        list[now].className="list";
        now=next;
    }

    var p=setInterval(move,2000);
    dian.onmouseover=function(){
        clearInterval(p)
    }
    dian.onmouseout=function(){
        p=setInterval(move,2000);
    }
    rights.onclick=function(){
        move();
    }
    lefts.onclick=function(){
        move("left");
    }
    //轮播点
    for (var i = 0; i < list.length; i++) {
        list[i].name=i;
        list[i].onclick=function(){
            next=this.name;
            imgs[now].style.left="0px";
            imgs[next].style.left="600px";
            animate(imgs[now],{left:-600});
            animate(imgs[next],{left:0});
            list[next].className="list active";
            list[now].className="list";
            now=next;
        }
    };
})
