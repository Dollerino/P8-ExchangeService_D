/*
  Сервис интеграции ПП Парус 8 с WEB API
  Конфигурация сервера приложений
*/

//------------
// Тело модуля
//------------

//Параметры подключения к БД
let dbConnect = {
    //Пользователь БД
    sUser: "parus",
    //Пароль пользователя БД
    sPassword: "parus",
    //Строка подключения к БД
    sConnectString: "DEMOP_CITKSERV",
    //Наименование модуля (для сессии БД)
    sSessionModuleName: "PARUS$ExchangeServer",
    //Подключаемый модуль обслуживания БД (низкоуровневые функции работы с СУБД)
    sConnectorModule: "parus_oracle_db.js"
};

//Параметры обработки очереди исходящих сообщений
let outgoing = {
    //Размер блока одновременно обрабатываемых исходящих сообщений
    nPortionSize: 1,
    //Скорость проверки наличия исходящих сообщений (мс)
    nCheckTimeout: 5000
};

//-----------------
// Интерфейс модуля
//-----------------

module.exports = {
    dbConnect,
    outgoing
};
