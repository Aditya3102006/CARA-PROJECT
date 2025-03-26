const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',() => {
        close.classList.remove('active')
    })
}

// <!-- <script>
// var MainImg = document.getElementsById('MainImg');
// var smallimg = document.getElementsByClassName('small-img');

// smallimg[0].oneclick = function(){
//     MainImg.src = smallimg[0].src;
// }
// smallimg[1].oneclick = function(){
//     MAinImg.src = smallimg[1].src;
// }
// smallimg[2].oneclick = function(){
//     MAinImg.src = smallimg[2].src;
// }
// smallimg[3].oneclick = function(){
//     MAinImg.src = smallimg[3].src;
// }

// </script> -->

// <!-- <script>
// const MainImg = document.getElementById("MainImg");
// const smallimg = document.getElementsByClassName("small-img");

// for(let i = 0; i<4; i++){
//     smallimg[i].addEventListener("click", function(){
//         MainImg.src = smallimg[i].src;
//     });
// } -->


for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        MainImg.src = smallImg[i].src;
    }
}
