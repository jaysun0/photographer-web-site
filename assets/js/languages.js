import state from './state.js';
import dom from './dom.js';

const languages = {
    'en': {
        //navigation items
        'nav__item_skills': 'skills',
        'nav__item_portfolio': 'portfolio',
        'nav__item_price': 'price',
        'nav__item_contacts': 'contacts',

        //section names
        'skills__title': 'Skills',
        'portfolio__title': 'Portfolio',
        'price__title': 'Price',

        //hero section
        'hero__title': 'Sasha Risova',
        'hero__motto': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hero__link': 'Hire me',

        //skills section
        'skills__name_1': 'Digital photography',
        'skills__description_1': 'High-quality photos in the studio and on the nature',
        'skills__name_2': 'Video shooting',
        'skills__description_2': 'Capture your moments so that they always stay with you',
        'skills__name_3': 'Retouch',
        'skills__description_3': 'I strive to make photography surpass reality',
        'skills__name_4': 'Audio',
        'skills__description_4': 'Professional sounds recording for video, advertising, portfolio',

        //portfolio section
        'portfolio__btn_winter': 'Winter',
        'portfolio__btn_spring': 'Spring',
        'portfolio__btn_summer': 'Summer',
        'portfolio__btn_autumn': 'Autumn',

        //price section
        'price__title_standard': 'Standard',
        'price__price_standard': '500 $',
        'price__title_premium': 'Premium',
        'price__price_premium': '700 $',
        'price__title_gold': 'Gold',
        'price__price_gold': '1000 $',
        'price__option_standard-1': 'One location',
        'price__option_standard-2': '120 photos in color',
        'price__option_standard-3': '12 photos in retouch',
        'price__option_standard-4': 'Readiness 2-3 weeks',
        'price__option_standard-5': 'Make up, visage',
        'price__option_premium-1': 'One or two locations',
        'price__option_premium-2': '200 photos in color',
        'price__option_premium-3': '20 photos in retouch',
        'price__option_premium-4': 'Readiness 1-2 weeks',
        'price__option_premium-5': 'Make up, visage',
        'price__option_gold-1': 'Three locations or more',
        'price__option_gold-2': '300 photos in color',
        'price__option_gold-3': '50 photos in retouch',
        'price__option_gold-4': 'Readiness 1 week',
        'price__option_gold-5': 'Make up, visage, hairstyle',
        'price__button': ['Order shooting'],

        //contacts section
        'contacts__title': 'Contact me',
        'contacts__button': 'Send message',

        //order form
        'form__title_order': 'Order shooting',
        'label_client-number': 'Leave your number and I will call you back.',
        'form__btn_submit': 'Submit',

        //all inputs' placeholders
        'input': ['E-mail', 'Phone', 'Message', 'Your phone'],
    },

    'ru': {
        //navigation items
        'nav__item_skills': 'навыки',
        'nav__item_portfolio': 'портфолио',
        'nav__item_price': 'цены',
        'nav__item_contacts': 'контакты',

        //section names
        'skills__title': 'Навыки',
        'portfolio__title': 'Портфолио',
        'price__title': 'Цены',

        //hero section
        'hero__title': 'Саша Рисова',
        'hero__motto': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hero__link': 'Пригласить',

        //skills section
        'skills__name_1': 'Фотография',
        'skills__description_1': 'Высококачественные фото в студии и на природе',
        'skills__name_2': 'Видеосъемка',
        'skills__description_2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skills__name_3': 'Ретушь',
        'skills__description_3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skills__name_4': 'Звук',
        'skills__description_4': 'Профессиональная запись звука для видео, рекламы, портфолио',

        //portfolio section
        'portfolio__btn_winter': 'Зима',
        'portfolio__btn_spring': 'Весна',
        'portfolio__btn_summer': 'Лето',
        'portfolio__btn_autumn': 'Осень',

        //price section
        'price__title_standard': 'Стандарт',
        'price__price_standard': '33000 ₱',
        'price__title_premium': 'Премиум',
        'price__price_premium': '46000 ₱',
        'price__title_gold': 'Золотой',
        'price__price_gold': '65000 ₱',
        'price__option_standard-1': 'Одна локация',
        'price__option_standard-2': '120 цветных фото',
        'price__option_standard-3': '12 отретушированных фото',
        'price__option_standard-4': 'Готовность через 2-3 недели',
        'price__option_standard-5': 'Макияж, визаж',
        'price__option_premium-1': 'Одна-две локации',
        'price__option_premium-2': '200 цветных фото',
        'price__option_premium-3': '20 отретушированных фото',
        'price__option_premium-4': 'Готовность через 1-2 недели',
        'price__option_premium-5': 'Макияж, визаж',
        'price__option_gold-1': 'Три локации и больше',
        'price__option_gold-2': '300 цветных фото',
        'price__option_gold-3': '50 отретушированных фото',
        'price__option_gold-4': 'Готовность через 1 неделю',
        'price__option_gold-5': 'Макияж, визаж, прическа',
        'price__button': ['Заказать съёмку'],

        //contacts section
        'contacts__title': 'Свяжитесь со мной',
        'contacts__button': 'Отправить',

        //order form
        'form__title_order': 'Заказать съёмку',
        'label_client-number': 'Оставьте ваш номер и я вам перезвоню.',
        'form__btn_submit': 'Отправить',

        //all inputs' placeholders
        'input': ['Электронная почта', 'Телефон', 'Cooбщение', 'Ваш телефон'],
    }
}

function translateNode (node, text) {
    if (typeof text !== 'object') {
        document.querySelector(`.${node}`).textContent = text
    } else {
        if (node.includes('input')) {
            const inputs = document.querySelectorAll(`.input`)
            inputs.forEach((input, index) => {
                input.setAttribute('placeholder', text[index])
            })
        } else {
            const nodes = document.querySelectorAll(`.${node}`)
            nodes.forEach((node, ind) => {
                const number = text.length > 1 ? ind : 0
                node.textContent = text[number]
            })
        }
    }
}

function changeLanguage(lang) {
    state.lang = lang
    if (lang === dom.languageOptions[0].textContent) {
        dom.languageOptions[0].classList.add('lang-switch__option_active')
        dom.languageOptions[1].classList.remove('lang-switch__option_active')
    } else {
        dom.languageOptions[1].classList.add('lang-switch__option_active')
        dom.languageOptions[0].classList.remove('lang-switch__option_active')
    }
    Object.keys(languages[lang]).forEach(key => {
        translateNode(key, languages[lang][key], lang)
    })
}

export {
    changeLanguage,
}