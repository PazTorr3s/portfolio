const modal = document.querySelectorAll('.services__modal')
const modalButton = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')


let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) =>{
    modalButton.addEventListener('click', () =>{
        activeModal(i)
    })
})

modalButton.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove) =>{
            modalRemove.classList.remove('active-modal')
        })
    })
})

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)