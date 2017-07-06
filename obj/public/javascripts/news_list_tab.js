function setTab(name,cursel){
    cursel_0=cursel;
    for(var i=1; i<=links_len; i++){
        var menu = document.getElementById(name+i);
        var menudiv = document.getElementById("con_"+name+"_"+i);
        if(i==cursel){
            menu.className="off";
            menudiv.style.display="block";
        }
        else{
            menu.className="";
            menudiv.style.display="none";
        }
    }
}
function Next(){
    cursel_0++;
    if (cursel_0>links_len)cursel_0=1
    setTab(name_0,cursel_0);
}
var name_0='one';
var cursel_0=1;
var ScrollTime=3000;//寰幆鍛ㄦ湡锛屽彲浠绘剰鏇存敼锛堟绉掞級
var links_len,iIntervalId;
onload=function(){
    var links = document.getElementById("tab1").getElementsByTagName('li')
    links_len=links.length;
    for(var i=0; i<links_len; i++){
        links[i].onmouseover=function(){
            clearInterval(iIntervalId);
            this.onmouseout=function(){
                iIntervalId = setInterval(Next,ScrollTime);;
            }
        }
    }
    document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
        clearInterval(iIntervalId);
        this.onmouseout=function(){
            iIntervalId = setInterval(Next,ScrollTime);;
        }
    }
    setTab(name_0,cursel_0);
    iIntervalId = setInterval(Next,ScrollTime);
}/**
 * Created by lamco on 2017/7/6.
 */
