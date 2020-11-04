
$(function(){
let wrap= document.querySelector(".wrapper");
$.getJSON( "post.json", function( data ) {
    
    data.map((item,index)=>{
        
        
        wrap.innerHTML+='<div class=col><div class=post id = "post" data-name ='+item.name+'><img width=100% src = '+item.src+'></div>'+'</br>';


    })  
});
});