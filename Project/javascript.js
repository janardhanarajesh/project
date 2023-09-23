 let a1=document.getElementById("d2").style.display="none"
 	let i=0;

 function onc1()
 {
  	i++;
let a=document.getElementById("d2").style.display="inline"


if(i==2)
{
document.getElementById("d2").style.display="none"
i=0;
}
}
// function ono1()
//  {
// let b=document.getElementById("d2").style.display="none"
// }
// function ono2()
//  {
// let b=document.getElementById("d2").style.display="block"
// }
// function onm2()
// {
// let c=document.getElementsByClassName('a1');
// c.style.fontSize="x-large"

// }
// function onm3()
// {
// let d=document.getElementsByClassName('a1');
// d.style.fontSize="10px"
// }
del=()=>
{
var ab=document.getElementById("d1").style.cssText="background-image:url('images/caluc.jpg');background-size:1279px 750px; "
document.getElementById('h11').style.display="none"
setTimeout(feu,1700);
document.getElementById("d2").style.display="none";
document.getElementById("btn_1").style.display="none";
}
feu=()=>
{
window.location="cal.html"

}
dek3=()=>
{
var ab=document.getElementById("d1").style.cssText="background-image:url('images/caluc.jpg');background-size:1279px 750px; "
document.getElementById('h11').style.display="none"
setTimeout(feu1,1700);
document.getElementById("d2").style.display="none";
document.getElementById("btn_1").style.display="none";
}
feu1=()=>
{
window.location="memorygame.html"

}
document.getElementById('het').innerHTML="<h1>KASI</h1>frontend Devloper"
document.getElementById('kit').innerHTML="<img src='images/kasi.jpg' height='300px' width='400px'>"
geth=()=>
{
document.getElementById('het').innerHTML="<h1>Kasi</h1>frontend Devloper"
document.getElementById('kit').innerHTML="<img src='images/kasi.jpg' height='300px' width='400px'>"

setTimeout(getr,1500)

}
setTimeout(getr=()=>
{
document.getElementById('het').innerHTML="<h1>Karthik</h1>frontend Devloper"
document.getElementById('kit').innerHTML="<img src='images/karthik.jpg' height='300px' width='400px'>"
setTimeout(getl,1500)
},1500)
getl=()=>
{
document.getElementById('het').innerHTML="<h1>Yogesh</h1>frontend Devloper"
document.getElementById('kit').innerHTML="<img src='images/yogi.jpg' height='300px' width='400px'>"
setTimeout(getE,1500)

}
getE=()=>
{
document.getElementById('het').innerHTML="<h1>Rajesh</h1>frontend Devloper"
document.getElementById('kit').innerHTML="<img src='images/rajesh.jpg' height='300px' width='400px'>"
setTimeout(geth,1500)

}