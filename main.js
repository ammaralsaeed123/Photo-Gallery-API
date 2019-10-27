//let all12 = document.getElementById("view");
//let show = document.getElementsByTagName("img");
//let dimg = document.getElementById("dimg");
//let close = document.getElementById("close");
//let next = document.getElementById("next");
//let pre = document.getElementById("pre");
//let hamza = ["screen-9.jpg", "151564065774128.jpg", "nhbnhb-12.jpg", "pho4.png", "nhbnhb-5.jpg", "nhbnhb-3.jpg"];
//let r = 0;
//for (let i = 0; i <= 6; i++) {
//    //show[i].addEventListener("click", getAqwe);
//}
//
//function getAqwe(event) {
//    all12.src = event.target.src;
//    dimg.style.display = "block";
//}
//
//
//close.addEventListener("click", closePhoto);
//
//function closePhoto() {
//    dimg.style.display = "none";
//}
//
//function nextPhoto() {
//
//    if (r >= hamza.length - 1) {
//
//    } else {
//        all12.setAttribute("src", hamza[r++]);
//    }
//}
//
//function prePhoto() {
//
//    if (r == 0) {
//
//    } else {
//        all12.setAttribute("src", hamza[r--]);
//    }
//}{}
var arr=[];
function getelement(){
    

var myHeaders = new Headers();

myHeaders.append('authorization', 'Bearer 55A-3rhf2qkiXAIjRb27VMXElPJjK3gInWxj');
fetch('https://gorest.co.in/public-api/photos', {
        method: 'GET',
        headers: myHeaders,
    })
    .then(response => response.json())
    .then(data => console.log(arr=data.result));
    var html = arr.map((item, index) => {
       return '<div class="myList">' +
           '<img class="img3" src="' + item.thumbnail + ' " data-id="' + index   + '"  onclick="bigimage()"></div>';
   });
   document.getElementById('gallery').innerHTML = html.join('');
}
