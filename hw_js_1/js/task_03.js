'use strict';

const ADMIN_PASSWORD = '5555';

const UserMessage = 'Введите пароль администратора';
let UserChoise = prompt(UserMessage)
let message;

if (UserChoise === null) {
    message = 'Отменено пользователем!';
} else if (UserChoise !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
} else if (UserChoise === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
alert(message);
