var b =document.getElementById('countdown')
let a  = () => {
b.innerText = '10';
   setTimeout(  ()=>{
    b.innerText = '9'
    setTimeout(  () =>{
        b.innerText = '8'
        setTimeout(  ()=>{
            b.innerText = '7'
            setTimeout(   ()=>{
                b.innerText = '6'
                setTimeout( ()=>{
                    b.innerText = '5'
                    setTimeout(    
                        ()=>{
                        b.innerText = '4'
                        setTimeout(     () =>{
                        b.innerText = '3'
                        setTimeout( 
                        () => {
                        b.innerText = '2'
                       setTimeout(            () => {
                       b.innerText = '1'
                       setTimeout(            () => {
                    b.innerText = '"Happy Independence Day"!'
                       
                                },1000)
                                                        
                            },1000)
                    
                       },1000)
                 
                   },1000)
             
                },1000)
                    
              },1000)
                
            },1000)
            
          },1000)
        
       },1000)

    },1000);
   

}
         window.onload = a();