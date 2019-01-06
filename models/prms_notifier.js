/*
  Сервис интеграции ПП Парус 8 с WEB API
  Модели данных: описатели параметров функций модуля рассылки уведомлений (класс Notifier)
*/

//----------------------
// Подключение библиотек
//----------------------

const Schema = require("validate"); //Схемы валидации
const { mail } = require("./obj_config"); //Схемы валидации конфигурации сервера приложений
const { Logger } = require("../core/logger"); //Класс для протоколирования работы
const { validateMailList } = require("./common"); //Общие объекты валидации моделей данных

//-------------
//  Тело модуля
//-------------

//Валидация списка адресов E-Mail для отправки уведомления
const validateTo = val => {
    return validateMailList(val);
};

//------------------
//  Интерфейс модуля
//------------------

//Схема валидации параметров конструктора
exports.Notifier = new Schema({
    //Параметры отправки E-Mail уведомлений
    mail: {
        schema: mail,
        required: true,
        message: {
            required: path => `Не указаны параметры отправки E-Mail уведомлений (${path})`
        }
    },
    //Объект для протоколирования работы
    logger: {
        type: Logger,
        required: true,
        message: {
            type: path =>
                `Объект для протоколирования работы (${path}) имеет некорректный тип данных (ожидалось - Logger)`,
            required: path => `Не указаны объект для протоколирования работы (${path})`
        }
    }
});

//Схема валидации параметров функции добавления сообщения в очередь отправки
exports.addMessage = new Schema({
    //Список адресов E-Mail для отправки уведомления
    sTo: {
        type: String,
        required: true,
        use: { validateTo },
        message: {
            type: path =>
                `Список адресов E-Mail для отправки уведомления (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указан cписок адресов E-Mail для отправки уведомления (${path})`,
            validateTo: path =>
                `Неверный формат списка адресов E-Mail для отправки уведомления (${path}), для указания нескольких адресов следует использовать запятую в качестве разделителя (без пробелов)`
        }
    },
    //Заголовок сообщения
    sSubject: {
        type: String,
        required: true,
        message: {
            type: path => `Заголовок сообщения (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указан заголовок сообщения (${path})`
        }
    },
    //Текст уведомления
    sMessage: {
        type: String,
        required: true,
        message: {
            type: path => `Текст уведомления (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указан текст уведомления (${path})`
        }
    }
});
