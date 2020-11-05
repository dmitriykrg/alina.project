

let wrap= document.querySelector(".wrapper");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'post.json', false); // либо "file.json"
xhr.send();
let file = xhr.responseText || '';

let jsond = JSON.parse(file);
    
    jsond.map((item)=>{
        
        
        wrap.innerHTML+='<div class=col><div class=post id = "post" data-name ='+item.name+'><img width=100% src = '+item.src+'></div>'+'</br>';


    })  
