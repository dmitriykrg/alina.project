


let wrap= document.querySelector(".wrapper");

        function lala (){};
        () =>{}
        check => {}

 fetch("post.json").then(response => response.json()).then(json=>   json.map((item)=>{
        
        
    wrap.innerHTML+='<div class=col><div class=post id = "post" data-name ='+item.name+'><img width=100% src = '+item.src+'></div>'+'</br>';


})  
);



    
  