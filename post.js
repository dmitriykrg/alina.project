

let wrap= document.querySelector(".wrapper");


       
 fetch("post.json").then(response => response.json()).then(json=>   json.map((item)=>{
        
let ust ='';
let ustCL='';

        if(item.pos==1){
          ust = 'установлено'
          ustCL = 'btnU'
        } else {
          ust = 'не установлено';
          ustCL = 'btnUN'
      }
    wrap.innerHTML+=`<div class=col><div class=post><label class="lab" id=${item.id} datatag="checked"><img width=100% src = ${item.src}></label><span class="name">${item.name}</span><button class=${ustCL}>${ust}</button</div></div>
    `
    
    

    
 })
);


$('.wrapper').delegate('label','click',function(data){
    
    let id = data.currentTarget.id;
    
    let check = data.currentTarget.attributes.datatag.value
  
Swal.fire({
    title: `Этот виджет имеет id=${id} и следовательно может ${check} получать прочие данные`,
    width: '60rem'
  })

})




    
  