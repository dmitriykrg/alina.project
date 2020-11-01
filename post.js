let wrap= document.querySelector(".wrapper")
$.getJSON( "post.json", function( data ) {
    
    data.map(item=>{
        
        wrap.innerHTML+='<div class="post">'+'<img width="100%"  src="'+item.src+' "> '+item.name+'</div> </br>';
       
        
    })


});