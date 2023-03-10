/*
  Сервис интеграции ПП Парус 8 с WEB API
  Конфигурация сервера приложений
*/

//------------
// Тело модуля
//------------

//Общие параметры
let common = {
    //Версия сервера приложений
    sVersion: "8.5.6.1",
    //Релиз сервера приложений
    sRelease: "2023.03.09",
    //Таймаут останова сервера (мс)
    nTerminateTimeout: 60000
};

//Параметры подключения к БД
let dbConnect = {
    //Пользователь БД
    sUser: "exs",
    //Пароль пользователя БД
    sPassword: "exs",
    //Схема размещения используемых объектов БД
    sSchema: "PARUS",
    //Строка подключения к БД
    sConnectString: "",
    //Наименование сервера приложений в сессии БД
    sSessionAppName: "PARUS$ExchangeServer",
    //Подключаемый модуль обслуживания БД (низкоуровневые функции работы с СУБД)
    sConnectorModule: "parus_oracle_db.js"
};

//Параметры обработки очереди исходящих сообщений
let outGoing = {
    //Проверять SSL-сертификаты адресов отправки сообщений (самоподписанные сертификаты будут отвергнуты)
    bValidateSSL: true,
    //Количество одновременно обрабатываемых исходящих сообщений
    nMaxWorkers: 1,
    //Интервал проверки наличия исходящих сообщений (мс)
    nCheckTimeout: 500,
    //Минимальный размер пула подключений к БД для обработчика исходящих сообщений
    nPoolMin: 4,
    //Максимальный размер пула подключений к БД для обработчика исходящих сообщений
    nPoolMax: 4,
    //Шаг инкремента подключений к БД в пуле обработчика исходящих сообщений
    nPoolIncrement: 0
};

//Параметры обработки очереди входящих сообщений
let inComing = {
    //Порт сервера входящих сообщений
    nPort: 8080,
    //Максимальный размер входящего сообщения (мб)
    nMsgMaxSize: 10,
    //Каталог размещения статических ресурсов
    sStaticDir: "static",
    //Минимальный размер пула подключений к БД для обработчика входящих сообщений
    nPoolMin: 10,
    //Максимальный размер пула подключений к БД для обработчика входящих сообщений
    nPoolMax: 10,
    //Шаг инкремента подключений к БД в пуле обработчика входящих сообщений
    nPoolIncrement: 0
};

//Параметры отправки E-Mail уведомлений
let mail = {
    //Адреc сервера SMTP
    sHost: "",
    //Порт сервера SMTP
    nPort: 465,
    //Имя пользователя SMTP-сервера
    sUser: "",
    //Пароль пользователя SMTP-сервера
    sPass: "",
    //Наименование отправителя для исходящих сообщений
    sFrom: ""
};

//-----------------
// Интерфейс модуля
//-----------------

module.exports = {
    common,
    dbConnect,
    outGoing,
    inComing,
    mail
};
