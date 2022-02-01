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
    sRelease: "2022.01.26",
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
    sConnectString: "DEMOP_CITKSERV_WAN",
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
    nMaxWorkers: 3,
    //Интервал проверки наличия исходящих сообщений (мс)
    nCheckTimeout: 1000
};

//Параметры обработки очереди входящих сообщений
let inComing = {
    //Порт сервера входящих сообщений
    nPort: 8080,
    //Максимальный размер входящего сообщения (мб)
    nMsgMaxSize: 10,
    //Каталог размещения статических ресурсов
    sStaticDir: "static"
};

//Параметры отправки E-Mail уведомлений
let mail = {
    //Адреc сервера SMTP
    sHost: "smtp.mail.ru",
    //Порт сервера SMTP
    nPort: 465,
    //Имя пользователя SMTP-сервера
    sUser: "appserver@citk-parus.ru",
    //Пароль пользователя SMTP-сервера
    sPass: "4~1DgTchonHB",
    //Наименование отправителя для исходящих сообщений
    sFrom: "'Сервис интеграции с WEB-API' <appserver@citk-parus.ru>"
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
