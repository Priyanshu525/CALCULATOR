let string ="";
click=new Audio('others/turn.wav')
input=document.getElementById('inp');
buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((bttn)=>{
   bttn.addEventListener('click',(e)=>{
    click.play();
    if(e.target.innerHTML=='='){
        string=eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML=='C'){
        string='';
        input.value=string;
    }
    else if(e.target.innerHTML=='DEL'){
        t=string.length;
        string=string.replace(string[t-1],'')
        input.value=string;

    }
   else{    
    console.log(e.target)
        string=string+e.target.innerHTML;
        input.value=string;
        
   }     
    
   })

})