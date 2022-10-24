const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    const isValid = login.length >= 4 && login.length <= 16;
    // console.log(isValid);
    return isValid;
};

const isLoginUnique = function (allLogins, login) {
    const reverseIncludes = allLogins.includes(login) !== true; // мне нужно чтобы если нету в массиве, то вернулось true, поэтому сделал реверс
    return reverseIncludes;
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === false) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }

    isLoginUnique(allLogins, login);

    if (isLoginUnique(allLogins, login) === false) {
        console.log('Такой логин уже используется!');
    } else {
        logins.push(login);
        console.log(logins);
    }
};

console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast'));
console.log(addLogin(logins, 'jqueryisextreme')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
