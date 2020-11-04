
$(function(){
let wrap= document.querySelector(".wrapper");
$.getJSON( "post.json", function( data ) {
    
    data.map((item,index)=>{
        
        wrap.innerHTML+='<img width=20% class="post" src="'+item.src+' "> '+'</br>';
      
        
    })
    wrap.addEventListener('mouseover',function (event){
        let target = event.target;
        if(target.className !== 'wrapper'){
            console.log('in')
        }
    })
    wrap.addEventListener('mouseout',function (event){
        let target = event.target;
       
            console.log('out')
        
    })

});
});