// let addfriend=document.querySelector("#addbtn");
// let cancelrequest=document.querySelector("#removebtn");
// let body=document.querySelector("body");
// let card=document.querySelector("#card");
// let domimage=document.querySelector("img");
// console.log(domimage);
// let turn=true;
// addfriend.addEventListener("click",function(){
//     if(turn == true){
//     addfriend.innerHTML='Request Sent';
//     addfriend.style.backgroundColor="#dadada";
//     addfriend.style.color="black";
//     cancelrequest.innerHTML="Next..";
//     cancelrequest.style.backgroundColor="red";
//     cancelrequest.style.color="white";
    
// }


// })




// let main=document.querySelector('main');
// let head=document.querySelector('h1');


// // const imagesPath=Array.from({length: 6},(elem,idx)=>{
// //     return `/Friend Request/Images/profile${idx}.jpg`;
// // })
// // console.log("Imagepath : ",imagesPath)
// // let images=[];

// // imagesPath.forEach(function(path,idx){
// //     const img= new Image();
// //     img.src=path;
// //     images[idx]=img;

// // })

// let usernames=['Julia ','Lary Osm','Swami Vivek','Abdul Rauf','Michael Cholee','Chinchyn','Lary Osm','Mishea Mocho','Chinchul','Divia','Aly Son','Mr.Beast','Shrdha Khapra','Brownie Wears','Tony Robbins','Abdul Rauf','Aman Dhatr','M.Talha','Astronaut'];
//  let count=0;
//  let img=new Image();
//  let h1=document.createElement("h1")
// cancelrequest.addEventListener('click',()=>{
//     addfriend.innerHTML='Add Friend';
//     addfriend.style.backgroundColor="lightseagreen";
//     addfriend.style.color="white";
    
//    img.src=`/Friend Request/Images/profile${count}.jpg`;
// //    card.prepend(img);
//     domimage.replaceWith(img);
//    let name=usernames[count];
//    h1.innerHTML=name;
//    head.replaceWith(h1);
// //    domimage.appendChild(h1);
   
//    count++;
// })

// // images.forEach((val)=>{
// //     main.appendChild(val);
    

// // })
// // images.forEach((val)=>{
// //     let img=new Image();
// //     img.src=val;
// //     img.onload();
  
   
// // })






// // cancelrequest.addEventListener("click",function(){
// //     // card.removeChild(domimage);

// // })

let card=document.querySelector("#card");
let profilePic=document.querySelector("img");
let name=document.querySelector("h1");
let addFriend=document.querySelector("#addbtn");
let removeFriend=document.querySelector("#removebtn");
let next=document.querySelector('#nextbtn');
addFriend.addEventListener("click",function(){
    addFriend.innerHTML='Request Sent';
    addFriend.style.color='black';
    addFriend.style.backgroundColor='#dadada';
    removeFriend.innerText='Reject..';
    removeFriend.style.color='white';
    removeFriend.style.backgroundColor='red';
})




let usernames=['Julia ','Lary Osm','Swami Vivek','Abdul Rauf','Michael Cholee','Chinchyn','Lary Osm','Mishea Mocho','Chinchul','Divia','Aly Son','Mr.Beast','Shrdha Khapra','Brownie Wears','Tony Robbins','Abdul Rauf','Aman Dhatr','M.Talha','Astronaut'];
//New User Dat
let img=new Image();//User Profile Picture;
let h1=document.createElement('h1');//Username
let count=0; //User count;
let imagesContainer=['https://images.unsplash.com/photo-1596285508507-5da6bec59433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZlbWFsZSUyME1vZGVsfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1557977275-d261356f567f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fHww','https://images.unsplash.com/flagged/photo-1571367032928-3034d979fac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFsZSUyME1vZGVsfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hbGUlMjBNb2RlbHxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1601896258776-e5675f9ef3c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1hbGUlMjBNb2RlbHxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZlbWFsZSUyME1vZGVsfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZlbWFsZSUyME1vZGVsfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmVtYWxlJTIwTW9kZWx8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hbGUlMjBNb2RlbHxlbnwwfHwwfHx8MA%3D%3D','https://images.unsplash.com/photo-1589481158353-4ac067b3fd37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1hbGUlMjBNb2RlbHxlbnwwfHwwfHx8MA%3D%3D','https://media.istockphoto.com/id/536988396/photo/confident-man-in-blue-sweater-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=hkHZBfwffufmuI-fUDPde9WcwXKj8IfEYlLdE5odft0=','https://media.istockphoto.com/id/1040478272/photo/serious-young-afro-american-man-standing-in-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=wD3bANIi5AssYIsMPF47gRwjFR1XndOOFxiHUNiTbPg=','https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1hbGUlMjBNb2RlbHxlbnwwfHwwfHx8MA%3D%3D'];
removeFriend.addEventListener('click',function(){
    addFriend.innerHTML='Add Friend';
    addFriend.style.color='white';
    addFriend.style.backgroundColor="cornflowerblue";
    img.src=imagesContainer[count]//Rendering Image
    h1.innerText=usernames[count];//Rendering username
    profilePic.replaceWith(img);
    name.replaceWith(h1);
    count++;

    
let heart=document.querySelector('i');

img.addEventListener("click",function(){
    heart.style.opacity='1';
    heart.style.scale=1.2;

    setTimeout(() => {
        heart.style.scale=0.8;
        heart.style.opacity='0';
        
    }, 1000);
})
})

