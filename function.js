let btn1 = document.querySelector('#btn1');
let img2 = document.querySelector('#quat');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    img2.src = 'image/loc_2.png'; 
    firebase.database().ref("test").child("thietbi").update({mayloc: 1});
});

btn2.addEventListener('click', () => {
    img2.src = 'image/loc_1.png'; 
    firebase.database().ref("test").child("thietbi").update({mayloc: 0});
});

