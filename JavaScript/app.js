const SERVICE__CARD__DATA = [
    {
        status: 'Active',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Paused',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Active',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Paused',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Active',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Paused',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
    {
        status: 'Active',
        title: 'Development of visualization of the exterior of buildings',
        location: 'Design Interior > Design of buildings > Landscape design',
        income: '100 000 UZS',
        views: '16',
        sales: '2'
    },
];

//*********************************************************************************************************************



const search_input = document.querySelector('.search__input')
const accept__orders = document.querySelector('.accept__orders')

if (window.innerWidth <= 768) {
    search_input.placeholder = 'Search...'
} else {
    search_input.placeholder = 'Search for services...'
}


window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        search_input.placeholder = 'Search...'
    } else {
        search_input.placeholder = 'Search for services...'
    }
    document.querySelectorAll('.service-card__text').forEach(response => {
        if (window.innerWidth <= 500) {
            response.textContent = `Design Interior > ... > Landscape design  `
        } else {
            response.textContent = `Design Interior > Design of buildings > Landscape design   `
        }

    })

    dropdownFun()
})

accept__orders.addEventListener('change', () => {
    const label = document.querySelector('.accept__orders__label')
    if (accept__orders.checked) {
        label.style.background = '#4790FF'
    } else {
        label.style.background = '#9CA5B3'
    }
})

// **** FUNCTION FOR CREATE THE SAME CARD


const card__Box = document.querySelector('.service-cards__box')
const card__Box_P = document.querySelector('.service-pause__box')
const card__Box_All = document.querySelector('.service-all__box')

const AddCardFun = () => {
    SERVICE__CARD__DATA.forEach(card => {
        if (card.status == 'Active') {
            card__Box.innerHTML += `
                <div class="service__card">
                <div class="service-card__responsive__box">
                    <div class="service-card__profile">
                         <div class="service-card__status">
                          ${card.status}
                         </div>
                         <button class="service-card__pause__btn">
                            <img src="./img/Services/pause.svg" alt="pause">
                         </button>
                    </div>
                        <div class="service-card__titles__box">
                             <h3 class="service-card__title">${card.title}</h3>
                             <p class="service-card__text">${card.location} </p>
                        </div>
                        <div style="width: 60px"></div>
               </div>
                <div class="service-card__info__box">
                    <div class="service-card__info">
                        <span class="service-card__info__title">
                            <img class="service-card__info__icon" src="./img/Header/Wallet.svg" alt="income">
                            income
                        </span>
                        <span class="service-card__income__price">${card.income}</span>
                    </div>
                    <div class="service-card__info">
                        <span class="service-card__info__title">
                            <img class="service-card__info__icon" src="./img/Services/Eye.svg" alt="Views">
                            Views
                        </span>
                        <span class="service-card__views__count">${card.views}</span>
                    </div>
                    <div class="service-card__info">
                        <span class="service-card__info__title">
                            <img class="service-card__info__icon" src="./img/Services/Coin.svg" alt="Views">
                            Sales
                        </span>
                        <span class="service-card__sales__count">${card.sales}</span>
                    </div>
                </div>
                <div class="service-card__options__box">
                    <button class="service-card__edit"><img src="./img/Services/Edit.svg" alt="EDIT">
                        Edit</button>
                    <button class="service-card__delete">Delete <img src="./img/Services/DELETE.svg"
                            alt=""></button>
                </div>
            </div>
        `
        } else if (card.status == 'Paused') {
            card__Box_P.innerHTML += `
            <div class="service__card">
            <div class="service-card__responsive__box">
                <div class="service-card__profile">
                     <div class="service-card__status_P">
                      ${card.status}
                     </div>
                     <button class="service-card__pause__btn">
                        <img src="./img/Services/break.svg" alt="break">
                     </button>
                </div>
                    <div class="service-card__titles__box">
                         <h3 class="service-card__title">${card.title}</h3>
                         <p class="service-card__text">${card.location} </p>
                    </div>
                    <div style="width: 60px"></div>
           </div>
            <div class="service-card__info__box">
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Header/Wallet.svg" alt="income">
                        income
                    </span>
                    <span class="service-card__income__price">${card.income}</span>
                </div>
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Services/Eye.svg" alt="Views">
                        Views
                    </span>
                    <span class="service-card__views__count">${card.views}</span>
                </div>
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Services/Coin.svg" alt="Views">
                        Sales
                    </span>
                    <span class="service-card__sales__count">${card.sales}</span>
                </div>
            </div>
            <div class="service-card__options__box">
                <button class="service-card__edit"><img src="./img/Services/Edit.svg" alt="EDIT">
                    Edit</button>
                <button class="service-card__delete">Delete <img src="./img/Services/DELETE.svg"
                        alt=""></button>
            </div>
        </div>  
            `
        }
        card__Box_All.innerHTML += `
            <div class="service__card">
            <div class="service-card__responsive__box">
                <div class="service-card__profile">
                     <div class="${card.status == 'Paused' ? 'service-card__status_P' : 'service-card__status'}">
                      ${card.status}
                     </div>
                     <button class="service-card__pause__btn">
                        <img src="./img/Services/${card.status == 'Paused' ? 'break' : 'pause'}.svg" alt="break">
                     </button>
                </div>
                    <div class="service-card__titles__box">
                         <h3 class="service-card__title">${card.title}</h3>
                         <p class="service-card__text">${card.location} </p>
                    </div>
                    <div style="width: 60px"></div>
           </div>
            <div class="service-card__info__box">
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Header/Wallet.svg" alt="income">
                        income
                    </span>
                    <span class="service-card__income__price">${card.income}</span>
                </div>
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Services/Eye.svg" alt="Views">
                        Views
                    </span>
                    <span class="service-card__views__count">${card.views}</span>
                </div>
                <div class="service-card__info">
                    <span class="service-card__info__title">
                        <img class="service-card__info__icon" src="./img/Services/Coin.svg" alt="Views">
                        Sales
                    </span>
                    <span class="service-card__sales__count">${card.sales}</span>
                </div>
            </div>
            <div class="service-card__options__box">
                <button class="service-card__edit"><img src="./img/Services/Edit.svg" alt="EDIT">
                    Edit</button>
                <button class="service-card__delete">Delete <img src="./img/Services/DELETE.svg"
                        alt=""></button>
            </div>
        </div>  
            `
    })
}

// **** FUNCTION FOR CREATE THE SAME CARD


document.querySelectorAll('.service-card__text').forEach(response => {
    if (window.innerWidth <= 500) {
        response.textContent = `Design Interior > ... > Landscape design  `
    } else {
        response.textContent = `Design Interior > Design of buildings > Landscape design   `
    }

})


// ************ Drop down function
const navTitles = document.querySelectorAll('.footer__nav__title')
const footer_navList = document.querySelectorAll('.footer__nav__list')
let footer_listItemIndex;

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
}



// ****************** TOGGLE function
const filterListItem = document.querySelectorAll('.filter__list__item')
const filterCount = document.querySelectorAll('.filter__count')
const filterName = document.querySelectorAll('.filter__name')


filterListItem.forEach((item, idx) => {
    item.addEventListener('click', function () {

        const filterStatus = filterName[idx].textContent

        if (filterStatus == 'Active') {
            card__Box.style.display = 'grid'
            card__Box_P.style.display = 'none'
            card__Box_All.style.display = 'none'
        } else if (filterStatus == "Paused") {
            card__Box_P.style.display = 'grid'
            card__Box.style.display = 'none'
            card__Box_All.style.display = 'none'
        } else {
            card__Box_All.style.display = 'grid'
            card__Box.style.display = 'none'
            card__Box_P.style.display = 'none'
        }

        filterListItem.forEach(filter_item => {
            filter_item.classList.remove('filter__list__item-Active')
        })
        filterCount.forEach(filter_item => {
            filter_item.classList.remove('filter__count__active')
        })
        filterListItem[idx].classList.add('filter__list__item-Active')
        filterCount[idx].classList.add('filter__count__active')
    })
})

AddCardFun()
dropdownFun()


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


// LANG changing function

const lang = document.querySelector('.lang__type')
const lang__list = document.querySelectorAll('.lang__item')

lang__list.forEach((item, index) => {
    item.addEventListener('click', () => {
        lang.textContent = lang__list[index].textContent
    })
})