
$(function(){
let wrap= document.querySelector(".wrapper");
$.getJSON( "post.json", function( data ) {
    
    data.map((item,index)=>{
        
        wrap.innerHTML+='<div class=post id = "post" data-name ='+item.name+'><img width=100% src = '+item.src+'></div>'+'</br>';
      
        
    })
    wrap.addEventListener('mouseover',function (event){
        let target = event.target;
        if(target.className !== 'wrapper'){
            let text = document.getElementById(target.id);
            
            
        }
    })
    wrap.addEventListener('mouseout',function (event){
        let target = event.target;
        let text = document.getElementById(target.id);
      
        
    })

});
});