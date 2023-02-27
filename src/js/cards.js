class MobileAppCards {
  constructor(bg, text) {
    this.bg = bg;
    this.text = text;
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('col-xl-4', 'col-md-6', 'mobile-app__cards');
    const container = document.querySelector('#ma-cards');

    element.innerHTML = `
              <div class="mobile-app__card">
              <img class="mobile-app__img" src="${this.bg}" alt="#">
                <p class="mobile-app__card-text">
                  ${this.text}
                </p>
                <div class="black-circle">
                  <svg
                    class="mobile-app__card-plus"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.99993 -0.000244141H5.99995V5.99977H-6.10352e-05V7.99967H5.99995V13.9997H7.99993V7.99967H13.9999V5.99977H7.99993V-0.000244141Z"
                      fill="#1EACC7"
                    />
                  </svg>
                </div>
              </div>`;

    container.appendChild(element);
  }
}
const cardsData = [
  ['img/Карточка1.png', 'оформление заказа одним касанием'],
  ['img/Карточка2.png', 'надежная подача'],
  ['img/Карточка3.png', 'прозрачные цены'],
  ['img/Карточка4.png', 'безналичная оплата'],
  ['img/Карточка5.png', 'обратная связь'],
  ['img/Карточка6.png', 'разделить стоимость поездки'],
];

cardsData.forEach((data) => new MobileAppCards(...data).render());
