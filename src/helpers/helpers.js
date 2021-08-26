import Consts from './consts';
import keyboard from './keyboard.js';

const changeLangEngToRus = (word) => {
    let str;
    switch (word[0].toLowerCase()) {
        case 'k':
            str = 'К';
            break;
        case 'l':
            str = 'ЛТ';
            break;
        case 'a':
            str = 'Аспирантура';
            break;
        default:
            break;
    }
    // Возвращаем цифры в строку
    return word.match(/\d+/g) === null ? str : str + word.match(/\d+/g)[0];
};

const changeLangRusToEng = (word) => {
    let str;
    switch (word[0].toUpperCase()) {
        case 'К':
            str = 'K';
            break;
        case 'Л':
            str = 'LT';
            break;
        case 'А':
            str = 'Apsirant';
            break;
        default:
            break;
    }
    // Возвращаем цифры в строку
    return word.match(/\d+/g) === null ? str : str + word.match(/\d+/g)[0];
};

const findFacultyName = (word) => {
    let str = word;
    switch (str.toLowerCase()) {
        case 'k':
            str = 'Космический факультет';
            break;
        case 'lt':
            str = 'Лесной факультет';
            break;
        case 'aspirant':
            str = 'Аспирантура';
            break;
        default:
            break;
    }
    return str;
};

const translateFullGroupNameToRus = (word) => {
    let str = '';
    switch (word[0].toUpperCase()) {
        case 'K':
            str += 'К';
            break;
        case 'LT':
            str += 'ЛТ';
            break;
        default:
            break;
    }
    for (let i = 1; i < word.length - 1; i++) str += word[i];
    switch (word[word.length - 1].toUpperCase()) {
        case 'B':
            return (str += 'Б');
        case 'M':
            return (str += 'М');
        default:
            return (str += word[word.length - 1]);
    }
};

const translateFullGroupNameToEng = (word) => {
    let str = '';
    switch (word[0].toUpperCase()) {
        case 'К':
            str += 'k';
            break;
        case 'ЛТ':
            str += 'lt';
            break;
        default:
            break;
    }
    for (let i = 1; i < word.length - 1; i++) str += word[i];
    switch (word[word.length - 1].toUpperCase()) {
        case 'Б':
            return (str += 'b');
        case 'М':
            return (str += 'm');
        default:
            return str;
    }
};

const generateUniqKey = (prefix, index) =>
    `${prefix}_${new Date().getTime() + index}`;

const removeClasses = (DOM) =>
    DOM.classList.forEach((item) => DOM.classList.remove(item));

const findRequestType = (param) => {
    const NAMES = ['group', 'aud', 'teacher'];
    let type = {},
        regResult;
    NAMES.map((item) => {
        let regExp = new RegExp(item, 'i');
        regResult = regExp.exec(param);
        if (regResult !== null) type.name = regResult[0];
        return type;
    });
    switch (type.name) {
        case 'group':
            type.type = 1;
            break;
        case 'teacher':
            type.type = 3;
            break;
        case 'aud':
            type.type = 5;
            break;
        default:
            break;
    }
    return type;
};

const getTextColorFromWidth = (width) => {
    return width < Consts.DESKTOP_MIN_WIDTH ? 'raspTextColor' : 'textColor';
};

const finderIsEmpty = (state) => {
    return state.length > 0 ? true : false;
};

/**
 * Получение типа расписания (Препод, аудитория, группа)
 * @param data - Расписание
 * @returns {*} - Возвращаем тип расписания
 */
const getRaspType = (data) => {
    let keys = Object.keys(data);
    let types = ['aud', 'teacher', 'group'];
    let res;

    keys.map((item) => {
        types.map((type) => {
            if (type === item) return (res = type);
            return null;
        });
        return null;
    });
    return res;
};

/**
 * Перевод цифры в римскую
 * @param numb - Цифра
 * @returns {string} - Римская цифра
 */
const switchNumber = (numb) => {
    switch (numb) {
        case '0':
            return 'I';
        case '1':
            return 'II';
        case '2':
            return 'III';
        case '3':
            return 'IV';
        case '4':
            return 'V';
        case '5':
            return 'VI';
        case '6':
            return 'VII';
        default:
            break;
    }
};

/**
 * Склеиваем объекты
 * @param source - Источник
 * @param target - Цель
 * @returns {*} - Возвращаем склеенный объект
 */
const mergeObjects = (source, target) => {
    if (!source) {
        return;
    }

    if (Object.keys(target).length >= Object.keys(source).length) {
        for (let key in source) {
            if (target[key] !== undefined) {
                target[key] = source[key].concat(target[key]);
            }
        }

        return target;
    } else {
        for (let key in target) {
            if (source[key] !== undefined) {
                source[key] = target[key].concat(source[key]);
            }
        }

        return source
    }
}

const checkItem = (item) => {
    return item !== undefined && item.length !== 0;
};

/**
 * Расчёт разницы времени для текущей пары (подсветка красным)
 * @param cur - Текущая пара
 * @param appTimer - Глобальный объект даты
 * @returns {{timer, diff: null, soon: boolean}} diff - Разница во времени до пары, soon - включение подсветки
 */
const getTimer = (cur, appTimer) => {
    const {pairtime} = cur;
    const daysDiff = appTimer.todayIndex !== appTimer.dayIndex + 1;
    let res = {diff: null, soon: false, timer: pairtime};


    if (daysDiff) {
        return res;
    }

    const t = pairtime.split('—')[0].split(':').map((i) => Number(i));

    const curTime = appTimer.date.getHours() * 60 + appTimer.date.getMinutes();
    const nextPair = t[0] * 60 + t[1];
    const diffTime = nextPair - curTime;
    // const diffTime = 40; Раскоментить для теста
    if (diffTime > 0 && diffTime <= 60) {
        res.diff = diffTime;
        res.soon = true;
    }

    return res;
};

/**
 * Проверяем пары на раздвоение
 * @param cur - Пара
 * @returns {boolean} - Двойная или одинарная
 */
const checkIsDouble = (cur) => {
    const {pair} = cur;
    let isDouble = false;

    if (pair.length > 1) {
        isDouble = true;
    }

    return isDouble;
};

/**
 * Перевод параметра в строку
 * @param item - Потенциальный массив
 * @returns {*} - Распарсенная строка
 */
const checkOnArr = (item) => {
    if (Array.isArray(item)) {
        return item.join(', ');
    } else {
        return item;
    }
};

/**
 * Переворачиваем переданный текст в англ. раскладку
 * @param str - Строка из инпута в UI
 * @param index - Индекс нужного символа
 * @returns {*} - Переведеная строка
 */
const convertString = (str, index) => {
    if (keyboard[str[index]]) {
        return str.replaceAt(index, keyboard[str[index]]);
    }
    return str;
};

export {
    changeLangEngToRus,
    changeLangRusToEng,
    findFacultyName,
    translateFullGroupNameToEng,
    translateFullGroupNameToRus,
    generateUniqKey,
    removeClasses,
    findRequestType,
    getTextColorFromWidth,
    finderIsEmpty,
    getRaspType,
    switchNumber,
    mergeObjects,
    checkItem,
    getTimer,
    checkIsDouble,
    checkOnArr,
    convertString,
};
