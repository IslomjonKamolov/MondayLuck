const steps_dropdown = document.querySelectorAll('.steps__dropdown')
const steps_dropdown_main = document.querySelectorAll('.steps__dropdown--main')
const dropdown_arrow = document.querySelectorAll('.steps__dropdown--arrow')
const dropdown_text = document.querySelectorAll('.steps__dropdown--text')

const dropDownFun = () => {
    steps_dropdown.forEach((item, idx) => {
        item.addEventListener('click', () => {
            steps_dropdown_main.forEach((mainItem, mainIdx) => {
                if (mainIdx !== idx) {
                    mainItem.style.marginBottom = '0'
                    dropdown_arrow[mainIdx].style.transform = 'rotate(0deg)'
                    dropdown_text[mainIdx].style.height = '0'
                    dropdown_text[mainIdx].style.transition = 'all 0.3s'
                }
            })

            const currentHeight = parseInt(dropdown_text[idx].style.height) || 0;

            if (currentHeight === 0) {
                if (window.innerWidth <= 768) {
                    steps_dropdown_main[idx].style.marginBottom = '11px'
                } else {
                    steps_dropdown_main[idx].style.marginBottom = '10.5px'
                }
                dropdown_arrow[idx].style.transform = 'rotate(180deg)'
                dropdown_text[idx].style.height = dropdown_text[idx].scrollHeight + 'px'
                dropdown_text[idx].style.transition = 'all 0.3s'
            } else {
                steps_dropdown_main[idx].style.marginBottom = '0'
                dropdown_arrow[idx].style.transform = 'rotate(0deg)'
                dropdown_text[idx].style.height = '0'
                dropdown_text[idx].style.transition = 'all 0.3s'
            }
        })
    })
}

dropDownFun()






// ***********************************


// ************ Drop down function
const navTitles = document.querySelectorAll('.footer__nav__title');
const footer_navList = document.querySelectorAll('.footer__nav__list');


const footerDropFun = () => {
    navTitles.forEach((item, idx) => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 769) {
                if (parseInt(footer_navList[idx].style.height) > 0) {
                    footer_navList.forEach(nav => {
                        nav.style.height = '0'
                    })
                    footer_navList[idx].style.height = '0'
                } else {
                    footer_navList.forEach(nav => {
                        nav.style.height = '0'
                    })
                    footer_navList[idx].style.height = '85.61px'
                }
            } else {
                footer_navList.forEach(nav => {
                    nav.style.height = 'auto'
                })
            }
        })
    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 769) {
        footer_navList.forEach(nav => {
            nav.style.height = '0'
        })
    } else {
        footer_navList.forEach(nav => {
            nav.style.height = 'auto'
        })
    }
})

footerDropFun()

const Pdrop = document.querySelectorAll('.p__reg--dropdown')
const PdropMain = document.querySelectorAll('.p__reg--dropdown__main')
const PdropText = document.querySelectorAll('.reg__drop__text')
const PdropArrow = document.querySelectorAll('.reg__drop__arrow')


Pdrop.forEach((item, index) => {
    if (parseInt(PdropText[index].style.height) < 10) {
        PdropMain[index].style.marginBottom = '17px'
        PdropArrow[index].style.transform = 'rotate(180deg)'
        PdropText[index].style.height = '1px'
        PdropText[index].style.transition = 'all 0.3s'
        setTimeout(() => {
            PdropText[index].style.height = PdropText[index].scrollHeight + 'px'
        }, 10);
    } else {
        PdropMain[index].style.marginBottom = '0'
        PdropArrow[index].style.transform = 'rotate(0deg)'
        PdropText[index].style.height = '0'
        PdropText[index].style.transition = 'all 0.3s'
    }
    item.addEventListener('click', () => {
        if (parseInt(PdropText[index].style.height) < 10) {
            PdropMain[index].style.marginBottom = '17px'
            PdropArrow[index].style.transform = 'rotate(180deg)'
            PdropText[index].style.height = '1px'
            PdropText[index].style.transition = 'all 0.3s'
            setTimeout(() => {
                PdropText[index].style.height = PdropText[index].scrollHeight + 'px'
            }, 10);
        } else {
            PdropMain[index].style.marginBottom = '0'
            PdropArrow[index].style.transform = 'rotate(0deg)'
            PdropText[index].style.height = '0'
            PdropText[index].style.transition = 'all 0.3s'
        }
    })
})


const safetyDrop = document.querySelectorAll('.safety__dropdown')
const safetyDropText = document.querySelectorAll('.safety__dropdown--text')
const safetyDropMain = document.querySelectorAll('.safety__dropdown--main')

safetyDrop.forEach((item, index) => {
    safetyDropText[index].style.height = '0'
    safetyDropMain[index].style.marginBottom = '0'
    safetyDropMain[index].style.transition = 'all 0.3s'
    item.addEventListener('click', () => {
        if (parseInt(safetyDropText[index].style.height) < 10) {
            safetyDropText[index].style.height = '1px'
            safetyDropText[index].style.transition = 'all 0.3s'
            safetyDropMain[index].style.marginBottom = '17px'
            setTimeout(() => {
                safetyDropText[index].style.height = safetyDropText[index].scrollHeight + 'px'
            }, 10);
        } else {
            safetyDropText[index].style.height = '0'
            safetyDropText[index].style.transition = 'all 0.3s'
            safetyDropMain[index].style.marginBottom = '0'
        }
    })
})
// ************ End of Drop down function


const menuToggle = document.querySelector('.burger__btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    menu.style.top = "0"
    document.body.style.overflow = 'hidden'
});

closeBtn.addEventListener('click', () => {
    menu.style.top = '-900px'
    document.body.style.overflow = 'auto'
});

const search_input = document.querySelector('.search__input');
const searchPlaceholderFun = () => {
    if (window.innerWidth <= 768) {
        search_input.placeholder = 'Search...';
    } else {
        search_input.placeholder = 'Search for services...';
    }
}

searchPlaceholderFun()

window.addEventListener('resize', searchPlaceholderFun)

// LANG changing function

const lang = document.querySelector('.lang__type')
const lang__list = document.querySelectorAll('.lang__item')

lang__list.forEach((item, index) => {
    item.addEventListener('click', () => {
      lang.textContent = lang__list[index].textContent
    })
})