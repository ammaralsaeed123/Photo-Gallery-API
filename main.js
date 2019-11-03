let test = document.getElementById("test");
    fetch('http://127.0.0.6:3000/', {
            method: 'GET',
            
        })
        .then(response => response.json())
        .then(data => {
            let re = data.photos;
            for(let i=0 ; i<20 ; i++) { 
          test.innerHTML += `<img src = "${re[i]}" class = "img" />`;
        }
        })
      
       function getelement() {
        fetch('http://127.0.0.6:3000/', {
          method: 'GET',
          
      })
      .then(response => response.json())
      .then(data => {
          let re = data.photos;
          for(let i=0 ; i<20 ; i++) { 
        test.innerHTML += `<img src = "${re[i]}" class = "img" />`;
      }
      })
    }









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
