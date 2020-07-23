var input =document.querySelector('input');
var numberbutton=document.querySelectorAll('.number');
var x='0';
var y='0';
var typeop;

window.addEventListener('load',()=>{
    document.getElementById('res').classList.add('disabled');
    Array.from(document.querySelectorAll('.operation')).forEach(element => {
        element.classList.add('disabled');
    });      
})
const numx=num=>{
   input.value += num ;  
   x = `${x}`+`${num}`;
   Array.from(document.querySelectorAll('.operation')).forEach(element => {
    element.classList.remove('disabled');
}); 
   document.getElementById('res').classList.add('disabled');   
}
const numy=num=>{
    input.value += num ;  
    y = `${y}`+`${num}`;
    document.getElementById('res').classList.remove('disabled');      
}
 
const operation=(op,type)=>{
    input.value += `${op}`;
    typeop=type;
    nub=Array.from(numberbutton);
    nub.forEach(btn => {
        btn.setAttribute('onclick','numy(this.value)');
    });
    Array.from(document.querySelectorAll('.operation')).forEach(element => {
        element.classList.add('disabled');
    });
    document.getElementById('res').classList.add('disabled');   
}
//get the value of x and y 
// returne the resault 
// show resault 
// disabled = btn 
// remove disabled for operation 
//push the reusalut into x
// set y=0
document.getElementById('res').addEventListener('click',()=>{
   
    xx=parseFloat(x);
    yy=parseFloat(y);
    let resultat=0;
    switch (typeop) {
        case 'div':resultat=div(xx,yy)
            break;
        case 'mul':resultat=mul(xx,yy)
            break
        case 'sub':resultat=sub(xx,yy)
            break
        case 'add':resultat=add(xx,yy)
            break
        case 'puis':resultat=puis(xx,yy)
            break;  
        case 'mod':resultat=mod(xx,yy)
            break;     
    }  
    //input.value=resultat.toPrecision(4);
    input.value=resultat;
    x=`${resultat}`;
    y='';
    Array.from(document.querySelectorAll('.operation')).forEach(element => {
        element.classList.remove('disabled');
    });
    document.getElementById('res').classList.add('disabled'); 
});
// return resualte
const div=(x,y)=>{return x/y}
const sub=(x,y)=>{return x-y}
const mul=(x,y)=>{return x*y}
const add=(x,y)=>{return x+y}
const puis=(x,y)=>{return x**y}
const mod=(x,y)=>{return x%y}
// reload location
document.getElementById('clear').addEventListener('click',()=>{
    location.reload();
});