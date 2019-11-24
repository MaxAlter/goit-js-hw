'use strict';

let credits = 23580;
const pricePerDrid = 3000;
let message;

const UserMessage = 'Укажите число Дроидов которое хотите купить';

const UserChoise = prompt(UserMessage);

const result = (UserChoise * pricePerDrid); // умножил количество дроидов на 3000

const resultUser = (credits - result); // отнял от кредита количество дроидов

if (UserChoise === null) {
    message = 'Отменено пользователем';
} else if (result < credits) {
    message = `Вы купили ${UserChoise} дроидов, на счету осталось ${resultUser} кредитов.`;
} else {
    message = 'Недостаточно средств';
}
alert(message);