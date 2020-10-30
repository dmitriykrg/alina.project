let wrap= document.querySelector(".wrapper")
$.getJSON( "post.json", function( data ) {
    
    data.map(item=>{
        
        wrap.innerHTML+='<div class="post">';
        wrap.innerHTML+='<img width="25%"  src="'+item.src+' ">';
        wrap.innerHTML+=item.name + '</br>';
        wrap.innerHTML+='</div>';
        
    })


});