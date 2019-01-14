/*
  Сервис интеграции ПП Парус 8 с WEB API
  Модели данных: описатель записи журнала работы сервиса обмена
*/

//----------------------
// Подключение библиотек
//----------------------

const Schema = require("validate"); //Схемы валидации

//----------
// Константы
//----------

//Состояния записей журнала работы
const NLOG_STATE_INF = 0; //Информация
const NLOG_STATE_WRN = 1; //Предупреждение
const NLOG_STATE_ERR = 2; //Ошибка
const SLOG_STATE_INF = "INF"; //Информация (строковый код)
const SLOG_STATE_WRN = "WRN"; //Предупреждение (строковый код)
const SLOG_STATE_ERR = "ERR"; //Ошибка (строковый код)

//------------------
//  Интерфейс модуля
//------------------

//Константы
exports.NLOG_STATE_INF = NLOG_STATE_INF;
exports.NLOG_STATE_WRN = NLOG_STATE_WRN;
exports.NLOG_STATE_ERR = NLOG_STATE_ERR;
exports.SLOG_STATE_INF = SLOG_STATE_INF;
exports.SLOG_STATE_WRN = SLOG_STATE_WRN;
exports.SLOG_STATE_ERR = SLOG_STATE_ERR;

//Схема валидации записи журнала работы сервиса обмена
exports.Log = new Schema({
    //Идентификатор записи журнала работы сервиса обмена
    nId: {
        type: Number,
        required: true,
        message: {
            type: path =>
                `Идентификатор записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Number)`,
            required: path => `Не указан идентификатор записи журнала работы сервиса обмена (${path})`
        }
    },
    //Дата записи журнала работы сервиса обмена
    dLogDate: {
        type: Date,
        required: true,
        message: {
            type: path =>
                `Дата записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Date)`,
            required: path => `Не указана дата записи журнала работы сервиса обмена (${path})`
        }
    },
    //Дата записи журнала работы сервиса обмена (строковое представление)
    sLogDate: {
        type: String,
        required: true,
        message: {
            type: path =>
                `Строковое представление даты записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указано строковое представление даты записи журнала работы сервиса обмена (${path})`
        }
    },
    //Состояние записи журнала работы сервиса обмена
    nLogState: {
        type: Number,
        enum: [NLOG_STATE_INF, NLOG_STATE_WRN, NLOG_STATE_ERR],
        required: true,
        message: {
            type: path =>
                `Состояние записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Number)`,
            enum: path => `Значение состояния записи журнала работы сервиса обмена (${path}) не поддерживается`,
            required: path => `Не указано состояние записи журнала работы сервиса обмена (${path})`
        }
    },
    //Состояние записи журнала работы сервиса обмена (строковый код)
    sLogState: {
        type: String,
        enum: [SLOG_STATE_INF, SLOG_STATE_WRN, SLOG_STATE_ERR],
        required: true,
        message: {
            type: path =>
                `Строковый код состояния записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - String)`,
            enum: path =>
                `Значение строкового кода состояния записи журнала работы сервиса обмена (${path}) не поддерживается`,
            required: path => `Не указан строковый код состояния записи журнала работы сервиса обмена (${path})`
        }
    },
    //Сообщение записи журнала работы сервиса обмена
    sMsg: {
        type: String,
        required: false,
        message: {
            type: path =>
                `Сообщение записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указано сообщение записи журнала работы сервиса обмена (${path})`
        }
    },
    //Идентификатор сервиса записи журнала работы сервиса обмена
    nServiceId: {
        type: Number,
        required: false,
        message: {
            type: path =>
                `Идентификатор сервиса записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Number)`,
            required: path => `Не указан идентификатор сервиса записи журнала работы сервиса обмена (${path})`
        }
    },
    //Код сервиса записи журнала работы сервиса обмена
    sServiceCode: {
        type: String,
        required: false,
        message: {
            type: path =>
                `Код сервиса записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указан код сервиса записи журнала работы сервиса обмена (${path})`
        }
    },
    //Идентификатор функции сервиса записи журнала работы сервиса обмена
    nServiceFnId: {
        type: Number,
        required: false,
        message: {
            type: path =>
                `Идентификатор функции сервиса записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Number)`,
            required: path => `Не указан идентификатор функции сервиса записи журнала работы сервиса обмена (${path})`
        }
    },
    //Код функции сервиса записи журнала работы сервиса обмена
    sServiceFnCode: {
        type: String,
        required: false,
        message: {
            type: path =>
                `Код функции сервиса записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - String)`,
            required: path => `Не указан код функции сервиса записи журнала работы сервиса обмена (${path})`
        }
    },
    //Идентификатор сообщения очереди обмена записи журнала работы сервиса обмена
    nQueueId: {
        type: Number,
        required: false,
        message: {
            type: path =>
                `Идентификатор сообщения очереди обмена записи журнала работы сервиса обмена (${path}) имеет некорректный тип данных (ожидалось - Number)`,
            required: path =>
                `Не указан идентификатор сообщения очереди обмена записи журнала работы сервиса обмена (${path})`
        }
    }
});
