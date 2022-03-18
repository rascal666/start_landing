let button = document.querySelectorAll('.item__btn ')
let buttonText = document.querySelector('.btn__text ')
let buttonIcon = document.querySelector('.btn__icon ')
let listHidden = document.querySelectorAll('.item__hidden ')
let main_content = document.querySelector('.main_content')

// button.addEventListener('click', () => {
//     console.log(button);
//     listHidden.classList.toggle('hiddenText');
//     if (listHidden.classList.contains('hiddenText') == true) {
//         buttonIcon.style.transform = "rotate(180deg)"
//         // main_content.style.height = 'auto'
//     } else {
//         buttonText.innerHTML = 'Выгоды'
//         buttonIcon.style.transform = "rotate(0deg)"
//         // main_content.style.height = '100vh'
//     }
//     console.log(listHidden);
// })

document.addEventListener('click', e => {
    if (e.target.classList.contains('btn__plan')) {
        const btnAttr = e.target.getAttribute('item')
        listHidden.forEach(element => {
            let hiddenAttr = element.getAttribute('item-hidden')
            if (btnAttr == hiddenAttr) {
                element.classList.toggle('hiddenText');
                if (element.classList.contains('hiddenText') == true) {
                    e.target.nextSibling.nextSibling.nextSibling.style.transform = "rotate(180deg)"
                    // main_content.style.height = 'auto'
                } else {
                    buttonText.innerHTML = 'Выгоды'
                    e.target.nextSibling.nextSibling.nextSibling.style.transform = "rotate(0deg)"
                    // main_content.style.height = '100vh'
                }
            }
        });
    }
})