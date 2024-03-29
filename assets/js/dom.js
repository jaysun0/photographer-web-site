const dom = {
    sectionTitleWrappers: document.querySelectorAll('.section__title-wrapper'),
    hero: document.querySelector('.hero'),
    header: document.querySelector('.header'),
    logo: document.querySelector('.header__logo'),
    themeIcon: document.querySelector('.header__theme-icon'),
    themeBtn: document.querySelector('.header__theme-btn'),
    burgerMenu: document.querySelector('.header__burger-menu'),
    navigation: document.querySelector('.nav'),
    burgerSticks: document.querySelectorAll('.header__burger-stick'),
    languageOptions: document.querySelectorAll('.lang-switch__option'),
    seasonButtonsContainer: document.querySelector('.portfolio__wrapper_buttons'),
    portfolioImages: document.querySelectorAll('.portfolio__image'),
    contacts: document.querySelector('.contacts'),
    contactsButton: document.querySelector('.contacts__button'),
    contactsInputEmail: document.querySelector('.contacts__input_email'),
    contactsInputTel: document.querySelector('.contacts__input_tel'),
    contactsInputMessage: document.querySelector('.contacts__input_message'),
    inputs: document.querySelectorAll('.contacts__input'),
    orderShootingButtons: document.querySelectorAll('.price__button'),
    formOrderWrapper: document.querySelector('.wrapper__form-order'),
    formButtonClose: document.querySelector('.form__btn_close'),
    formButtonSubmit: document.querySelector('.form__btn_submit'),
    formError: document.querySelector('.form__error'),
    clientNumber: document.querySelector('#client-number'),
}

export default dom