let sum=1;
function descifrar(){
    if(sum>0){
        sum-=1;
        return document.getElementById('containerText').style.lineHeight="1.2em";
    } else {
        sum+=1;
        return document.getElementById('containerText').style.lineHeight=".2em";
    }
}