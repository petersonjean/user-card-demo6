let userProfile = {};
let fdescription = document.getElementsByClassName('field-description')[0];
let fvalue = document.getElementsByClassName('field-value')[0];
const nameBtn = document.getElementById("name");
const dobBtn = document.getElementById("dob");
const telephoneBtn = document.getElementById("telephone");

//getting image element from the DOM
const profilePicture = document.getElementById("profilepicture");

console.log("my btn ", nameBtn, fdescription,fvalue);




 
 
//API Call
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => { //successful
   userProfile = data.results;
   console.log("data:" ,userProfile[0])
   
   

   //default behaviour for showing the  most api response dat
   fdescription.innerText = " My name is";  //set decription
   fvalue.innerText = userProfile[0].name.last; //set last name 
   profilePicture.setAttribute("src",userProfile[0].picture.large);
});

 nameBtn.addEventListener("click",function(){
   // changing value of field description when name clicked
   fdescription.innerText = " My name is";
   fvalue.innerText = userProfile[0].name.last;
})

dobBtn.addEventListener("click",function(){
   // changing value of field description when name clicked
   fdescription.innerText = " My date of birth is";
   fvalue.innerText = (userProfile[0].dob.date).substring(0,10);
})

telephoneBtn.addEventListener("click",function(){
   // changing value of field description when name clicked
   fdescription.innerText = " My phone number is";
   fvalue.innerText = userProfile[0].phone;
})



let jsonObj= '{"firstName": "Peter","lastName": "Jones"}';
let user = JSON.parse(jsonObj);
console.log("user is:", user);

