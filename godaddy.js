// sign in dropdown

// function show_hide(e){
//     var click=document.getElementById("drop-list")
//     if(click.style.display ==="none") {  
//         click.style.display ="block";
//      } 
//      else
//       {  
//         click.style.display ="none";  
//      } 
// }

var b=document.querySelector("#drop-list");
b.style.transform = "scale(0)";
document.getElementById("show").addEventListener("click",(e)=>{
  a.style.transform="scale(0)"
  e.stopPropagation();
  if(b.style.transform=="scale(0)"){
    b.style.transform = "scale(1)"
  }
  else{b.style.transform = "scale(0)"}
})
b.addEventListener("click",(e)=>{
  e.stopPropagation();
});
document.body.addEventListener("click",()=>{
  if(b.style.transform=="scale(1)"){
    b.style.transform="scale(0)"
  }
})

// first dropdown
// function show_content(){
//     var btn=document.getElementById("right-2-content")
//     if(btn.style.display ==="none") {  
//         btn.style.display ="block";  
//      } 
//      else
//       {  
//         btn.style.display ="none";  
//      } 
// }


// // removing content X
// function del(){
//   var del=document.getElementById("right-2-content")
//   if(del.style.display=="block"){
//     del.style.display="none"
//   }
// }

// 2nd method
var a=document.querySelector("#right-2-content");
a.style.transform="scale(0)";
document.getElementById("right-2-btn").addEventListener("click",(e)=>{
  b.style.transform="scale(0)"
  e.stopPropagation();
  if(a.style.transform == "scale(0)"){
    a.style.transform = "scale(1)"
  }
  else{a.style.transform = "scale(0)"}
})
a.addEventListener("click",(e)=>{
  e.stopPropagation();
})
document.body.addEventListener("click",()=>{
  if(a.style.transform=="scale(1)"){
    a.style.transform="scale(0)"
  }
})
function del(){
  a.style.transform="scale(0)"
}

// for  left barstyle.
function bar(){
  var bar=document.getElementById("left-2-drop")
  if(bar.style.display=="none"){
    bar.style.display="block";
    bar.style.transitionDuration="5s"
    bar.style.transitionTimingFunction="ease"
    bar.style.transitionDelay="1s"
  }
  else{
    bar.style.display="none"
  }
};

function remove(){
  var x=document.getElementById("left-2-drop")
 if(x.style.display=="block"){
   x.style.display="none"
 }
  };



// india-english drop
function india(){
  var y=document.getElementById("f-n-2-subdrop")
  if(y.style.display=="none"){
    y.style.display=="block";
  }
  else{
    y.style.display=="none"
  }
}

function india1(){
  var z=document.getElementById("f-n-2-subdrop")
  if(z.style.display=="block"){
    z.style.display=="none"
  }
}



// /////////////////////scroll left-right//////////////////////
var btn1=document.querySelector("#scroll-left")
var btn2=document.querySelector("#scroll-right")
var carousel=document.querySelector(".cards-content")

var c=0;
btn1.addEventListener("click",()=>{
  c+=10;
  if(c>0){c=0};
  carousel.style.transform = `translate(${c}%)`;
  carousel.style.transition="all ease 0.9s"
})
btn2.addEventListener("click",()=>{
  c-=10;
  if(c<-70){c=-70};
  carousel.style.transform = `translate(${c}%)`;
  carousel.style.transition="all ease 0.9s"
})


//////////video main section/////////////////////////
var vid=document.querySelector(".vid-main")
vid.style.transform="scale(0)"
var p=document.querySelector("#video-sec-btn")
var s=document.querySelector(".vid-btn1")
p.addEventListener("click",()=>{
  if(vid.style.transform=="scale(0)"){
    vid.style.transform = "scale(1)";
    p.style.transform= "scale(0)"
    s.style.transform="scale(1)"
  }
})

function vidbtn(){
  var vid1=document.querySelector(".vid-main");
  if(vid1.style.transform = "scale(1)"){
    vid1.style.transform="scale(0)"
    s.style.transform="scale(0)"
  }
}

// ///////////video section second////////////
var vid2=document.querySelector(".vid-main1")
vid2.style.transform="scale(1)"
var a1=document.querySelector("#video-sec-btn1")
var b1=document.querySelector(".vid-btn2")
a1.addEventListener("click",()=>{
  if(vid2.style.transform=="scale(0)"){
    vid2.style.transform = "scale(1)";
    a1.style.transform= "scale(0)"
    b1.style.transform="scale(1)"
  }
})

function vidbtn1(){
  var vid3=document.querySelector(".vid-main1");
  if(vid3.style.transform = "scale(1)"){
    vid3.style.transform="scale(0)"
    b1.style.transform="scale(0)"
  }
}
