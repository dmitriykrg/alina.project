let wrap= document.querySelector(".wrapper")
$.getJSON( "post.json", function( data ) {
    
    data.map((item,index)=>{
        
        wrap.innerHTML+='<div class="post">'+'<img width="100%"  src="'+item.src+' "> '+' <div class="target'+ index +'"> </div> </div > </br>';
      
        
    })
    wrap.addEventListener('mouseover',function (event){
        let target = event.target;
        if(target.className !== 'wrapper'){
        
        }
    })

});
