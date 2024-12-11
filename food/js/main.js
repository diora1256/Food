'use strict'

let tabcontent = document.querySelectorAll('.tabcontent')
let tabheader__item = document.querySelectorAll('.tabheader__item')
let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let btn = document.querySelectorAll('.btnAll')
let modal = document.querySelector('.modal')
let modal__close = document.querySelector('.modal__close')



let i = 0;           // chtoby rabotal slide
let x = 1            // chtoby rabotali chisla v slide

for(let i = 0; i < tabcontent.length; i++){     // fonovaya kartinka
    tabcontent[i].style.display = 'none'
}

tabcontent[0].style.display = 'block'

for(let i = 0; i < tabheader__item.length; i++){
    tabheader__item[i].addEventListener('click', () =>{
        for(let x = 0; x < tabcontent.length; x ++){
        tabcontent[x].style.display = 'none'
        tabheader__item[x].classList.remove('tabheader__item_active')
        }
        tabcontent[i].style.display = 'block'
        tabheader__item[i].classList.add('tabheader__item_active')
    })
}

for(let i = 0; i < offer__slide.length; i++){      //fonovaya kartinka
    offer__slide[i].style.display = 'none'
}

offer__slide[0].style.display = 'block'

next.addEventListener('click', () => {
    if(i < 3){
        offer__slide[i].style.display = 'none'
        i++; x++;
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`                //slide chisel
    }
    else{
        offer__slide[i].style.display = 'none'
        i = 0; x = 1;
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`                 // slide chisel
    }
})


prev.addEventListener('click', () => {
    if(i > 0){
        offer__slide[i].style.display = 'none'
        i--; x--;
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`                  //slide chisel
    }
    else{
        offer__slide[i].style.display = 'none'
        i = 3; x = 4
        offer__slide[i].style.display = 'block'
        current.innerHTML = `0${x}`                     // slide chisel
    }
})


btn[0].addEventListener('click', () => {
    modal.style.display = 'block'
})
                                                           //poyavlyaetsya model
btn[1].addEventListener('click', () => {
    modal.style.display = 'block'
})

modal__close.addEventListener('click', () => {                 //ischezaet model
    modal.style.display = 'none'
})


