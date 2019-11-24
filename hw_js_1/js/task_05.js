'use strict';

let CountryChina = 'китай';
let CountryChile = 'чили';
let CountryAvsralia = 'австралия';
let CountryIndia = 'индия';
let CountryJamaica = 'ямайка';

let message;

const UserMessage = 'Укажите страну доставки';

let UserChoise = prompt(UserMessage).toLowerCase();

console.log(UserChoise);

switch (UserChoise) {
    case CountryChina:
        message = `Доставка в Китай будет стоить ${100} кредитов.`;
        break;
    case CountryChile:
        message = `Доставка в Чили будет стоить ${250} кредитов.`;
        break;
    case CountryAvsralia:
        message = `Доставка в Австрилию будет стоить ${170} кредитов.`;
        break;
    case CountryIndia:
        message = `Доставка в Индию будет стоить ${80} кредитов.`;
        break;
    case CountryJamaica:
        message = `Доставка в Ямайка будет стоить ${120} кредитов.`;
        break;
    default:
        message = 'В вашей стране доставка не доступна';
}
alert(message);