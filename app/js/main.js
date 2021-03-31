//burger menu
const burger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
burger.addEventListener('click', () => {
    console.log('sdsdsd')
    headerMenu.classList.toggle('header__menu-active')
    burger.classList.toggle('header__burger-active')
    if (headerMenu.classList.contains('header__menu-active')) {
        headerMenu.style.maxHeight = headerMenu.scrollHeight + 40 + 'px'
    } else {
        headerMenu.style.maxHeight = '0px'
    }
})
//OPACITY SLIDER
function opacitySlider (prev, next, slides, slide, current, quantity, active) {
    let count = 1
    prev.addEventListener('click', () => {
        if (count !== 1) {
            slide.forEach((item) => {
                item.classList.remove(active)
            })
            count = count - 1
            setTimeout(() => {
                slide[count - 1].classList.add(active)
            }, 600)
            current.innerHTML = '0' + count
        }
    })
    next.addEventListener('click', () => {
        if (count !== slide.length) {
            slide.forEach((item) => {
                item.classList.remove(active)
            })
            count = count + 1
            setTimeout(() => {
                slide[count - 1].classList.add(active)
            },600)
            current.innerHTML = '0' + count
        }
    })
    quantity.innerHTML = '0' + slide.length
}
// TRANSLATE SLIDER
function translateSlider(prev, next, slides, slide, current, quantity, active) {
    let count = 1
    quantity.innerHTML = '0' + slide.length
    next.addEventListener('click', () => {
        if (count !== slide.length) {
            slide.forEach((item) => {
                item.classList.remove(active)
            })
            setTimeout(() => {
                slides.style.transform = 'translate(-' + (count - 1)*100 + '%)'
            },600)
            setTimeout(() => {
                slide[count - 1].classList.add(active)
            }, 600)
            count = count + 1
            current.innerHTML = '0' + count
        }
    })
    prev.addEventListener('click', () => {
        if (count !== 1) {
            slide.forEach((item) => {
                item.classList.remove(active)
            })
            setTimeout(() => {
                slides.style.transform = 'translate(-' + (count - 1)*100 + '%)'
            },600)
            setTimeout(() => {
                slide[count - 1].classList.add(active)
            }, 600)
            count = count - 1
            current.innerHTML = '0' + count
        }
    })
}
//GALLERY
const galleryPrev = document.querySelector('.gallery-prev')
const galleryNext = document.querySelector('.gallery-next')
const gallerySlides = document.querySelector('.gallery__slides')
const gallerySlide = document.querySelectorAll('.gallery__slide')
const galleryCurrent = document.querySelector('.gallery-current')
const galleryQuantity = document.querySelector('.gallery-quantity')
if (gallerySlide.length) {
    translateSlider(galleryPrev, galleryNext, gallerySlides, gallerySlide, galleryCurrent, galleryQuantity, 'gallery__slide-active')
}
// PROJECT
const projectPrev = document.querySelector('.project-prev')
const projectNext = document.querySelector('.project-next')
const projectSlides = document.querySelector('.project__images')
const projectSlide = document.querySelectorAll('.project__slide')
const projectCurrent = document.querySelector('.project-current')
const projectQuantity = document.querySelector('.project-quantity')
if (projectSlide.length) {
    opacitySlider(projectPrev, projectNext, projectSlides, projectSlide, projectCurrent, projectQuantity, 'project__slide-active')
}
// PROJECTS
const projectsPrev = document.querySelector('.projects-prev')
const projectsNext = document.querySelector('.projects-next')
const projectsSlides = document.querySelector('.projects__slides')
const projectsSlide = document.querySelectorAll('.projects__slide')
const projectsCurrent = document.querySelector('.projects-current')
const projectsQuantity = document.querySelector('.projects-quantity')
if (projectsSlide.length) {
    translateSlider(projectsPrev, projectsNext, projectsSlides, projectsSlide, projectsCurrent, projectsQuantity, 'projects__slide-active')
}
// CERTIFICATES
const certificatesPrev = document.querySelector('.certificates-prev')
const certificatesNext = document.querySelector('.certificates-next')
const certificatesSlides = document.querySelector('.certificates__slides')
const certificatesSlide = document.querySelectorAll('.certificates__slide')
const certificatesCurrent = document.querySelector('.certificates-current')
const certificatesQuantity = document.querySelector('.certificates-quantity')
if (certificatesSlide.length) {
    translateSlider(certificatesPrev, certificatesNext, certificatesSlides, certificatesSlide, certificatesCurrent, certificatesQuantity, 'certificates__slide-active')
}
// FIXED FORM
const contactSend = document.querySelector('.contact-send')
const fixed = document.querySelector('.fixed')
const fixedSend = document.querySelector('.fixed-send')
const fixedExit = document.querySelector('.fixed-exit')
function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim());
}
function isWords(name) {
    const regex = /^(([a-zA-Z-а-яА-ЯЁёІіЇїҐґЄє -]{1,80}))$/u
    return regex.test(name.trim());
}
function isLetterAndNumber(query) {
    const regex = /^[0-9-a-zA-Z-а-яА-ЯЁёІіЇїҐґЄє -]+$/;
    return regex.test(query.trim());
}
function isNumber(tel) {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
    return regex.test(tel.trim());
}
document.querySelectorAll('.input').forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.remove('error')
    })
})

if (contactSend !== null) {
    fixedSend.addEventListener('click', () => {
        fixed.classList.remove('fixed-active')
        document.querySelectorAll('.input').forEach((item) => {
            item.value = ''
        })
    })
    contactSend.addEventListener('click', () => {
        const email = document.querySelector('.email')
        const telephone = document.querySelector('.telephone')
        const name = document.querySelector('.name')
        const product = document.querySelector('.product')
        const message = document.querySelector('.message')
        let count = 0
        if (isEmail(email.value)) {
            email.classList.remove('error')
            count += 1
        } else {
            email.classList.add('error')
        }
        if (isNumber(telephone.value)) {
            telephone.classList.remove('error')
            count += 1
        } else {
            telephone.classList.add('error')
        }
        if (isWords(name.value)) {
            name.classList.remove('error')
            count += 1
        } else {
            name.classList.add('error')
        }
        if (isWords(product.value)) {
            product.classList.remove('error')
            count += 1
        } else {
            product.classList.add('error')
        }
        if (isLetterAndNumber(message.value)) {
            message.classList.remove('error')
            count += 1
        } else {
            message.classList.add('error')
        }
        if (count === 5) {
            fixed.classList.add('fixed-active')
        }

    })
    fixedExit.addEventListener('click', () => {
        fixed.classList.remove('fixed-active')
        document.querySelectorAll('.input').forEach((item) => {
            item.value = ''
        })
    })
}



