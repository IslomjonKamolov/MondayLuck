// ************ Drop down function
const navTitles = document.querySelectorAll('.footer__nav__title');
const footer_navList = document.querySelectorAll('.footer__nav__list');
let footer_listItemIndex = null;

// ***** CUSTOMERS DropDown

const C_dropBox = document.querySelectorAll('.C-dropDown');
const C_dropText = document.querySelectorAll('.C-dropDown__text');
const C_dropArrow = document.querySelectorAll('.C-dropDown__dropArrow');
const C_dropTitle = document.querySelectorAll('.C-dropDown__title');

// Hodisalarni tozalash uchun funksiyalar
const removeNavTitleListeners = () => {
    navTitles.forEach((title, titleIdx) => {
        title.removeEventListener('click', dropdownHandler);
    });
}

// Hodisalarni boshqaruvchi funksiyalar
const dropdownHandler = (titleIdx) => {
    footer_navList.forEach(nav_item => {
        nav_item.style.height = '0px';
    });
    if (footer_listItemIndex === titleIdx) {
        footer_listItemIndex = null;
    } else {
        footer_navList[titleIdx].style.height = '85.61px';
        footer_listItemIndex = titleIdx;
    }
};

const dropdownFun = () => {
    removeNavTitleListeners();

    if (window.innerWidth <= 768) {
        footer_navList.forEach(nav_item => {
            nav_item.style.height = '0';
        });

        navTitles.forEach((title, titleIdx) => {
            title.addEventListener('click', () => dropdownHandler(titleIdx));
        });
    } else {
        footer_navList.forEach(nav_item => {
            nav_item.style.height = 'auto';
        });
    }

    searchPlaceholderFun();
};

// CUSTOMERS DropDown
C_dropBox.forEach((dropBox, index) => {
    dropBox.addEventListener('click', () => {
        if (C_dropText[index].style.height < 100) {
            C_dropText[index].style.height = '20px';
            C_dropTitle[index].style.marginBottom = '16px';
            C_dropArrow[index].style.transform = 'rotate(180deg)';
            setTimeout(() => {
                C_dropText[index].style.height = C_dropText[index].scrollHeight + 'px';
            }, 10);
        } else {
            C_dropArrow[index].style.transform = 'rotate(0deg)';
            C_dropText[index].style.height = '';
            C_dropTitle[index].style.marginBottom = 0;
        }
    });
});

// search input uchun placeholder funksiyasi
const search_input = document.querySelector('.search__input');

const searchPlaceholderFun = () => {
    if (window.innerWidth <= 768) {
        search_input.placeholder = 'Search...';
    } else {
        search_input.placeholder = 'Search for services...';
    }
}

// CWCR card funksiyalari
const CWCR__box__card = document.querySelectorAll('.CWCR__box__card');
const CWCR__box__card__main = document.querySelectorAll('.CWCR__box__card__main');
const CWCR__box__card__arrow = document.querySelectorAll('.CWCR__box__card__arrow');
const CWCR__box__card__info = document.querySelectorAll('.CWCR__box__card__info');

CWCR__box__card__main.forEach(item => {
    item.style.marginBottom = '0';
});
CWCR__box__card__arrow.forEach(item => {
    item.style.transform = 'rotate(180deg)';
});
CWCR__box__card__info.forEach(item => {
    item.style.height = '0px';
});

CWCR__box__card.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (parseInt(CWCR__box__card__info[index].style.height) < 200) {
            CWCR__box__card__main.forEach(item => {
                item.style.marginBottom = '0';
            });
            CWCR__box__card__arrow.forEach(item => {
                item.style.transform = 'rotate(180deg)';
            });
            CWCR__box__card__info.forEach(item => {
                item.style.height = '0px';
            });
            CWCR__box__card__main[index].style.marginBottom = '17px';
            CWCR__box__card__arrow[index].style.transform = 'rotate(0deg)';
            CWCR__box__card__info[index].style.height = '443.65px';
        } else {
            CWCR__box__card__main[index].style.marginBottom = '0px';
            CWCR__box__card__arrow[index].style.transform = 'rotate(180deg)';
            CWCR__box__card__info[index].style.height = '0px';
        }
    });
});

// C-work kategoriyalar kartalari
const C_work_Cc = document.querySelectorAll('.C-work__categories__card');

C_work_Cc.forEach((item, index) => {
    item.addEventListener('click', () => {
        C_work_Cc.forEach(item => {
            item.classList.remove('CWC__card__active');
        });
        C_work_Cc[index].classList.add('CWC__card__active');
    });
});

window.addEventListener('resize', dropdownFun);

// Boshlang'ich holatni ishga tushiramiz
searchPlaceholderFun();
dropdownFun();

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
