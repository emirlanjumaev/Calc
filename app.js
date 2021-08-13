let ekranInput = document.querySelector('.input');
let btn = document.querySelectorAll('td');


// document.querySelector('.acc').addEventListener('click', function(onof){
//     let ekranIn = ekranInput;

//     ekranIn.classList.remove('infocus')

// })


btn.forEach(function(knopka){
    knopka.addEventListener('click', function(kn){
        let bttn = knopka.innerHTML;
        let ek1 =  ekranInput;
        let ekrann = ek1;

        console.log(bttn)   

        
        ekrann.classList.add('infocus')
    })
})