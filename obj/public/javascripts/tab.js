function G(id){
    return document.getElementById(id);
}
function switchTab(n){
    for(var i=1;i<=4;i++){
        G("tab" + i).className = "";
        G("tabCon" + i).style.display = "none";
    }
    G("tab" + n).className = "active";
    G("tabCon" + n).style.display = "block";
}/**
 * Created by lamco on 2017/7/6.
 */
