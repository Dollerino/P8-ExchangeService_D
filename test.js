/*
  Сервис интеграции ПП Парус 8 с WEB API
  Песочница для тестов
*/

//----------------------
// Подключение библиотек
//----------------------

require("module-alias/register");
const cfg = require("./config.js");
const { Logger } = require("./core/logger.js");
const db = require("./core/db_connector.js");
const { ServerError } = require("./core/server_errors.js");
const utls = require("./core/utils.js");

//------------
// Тело модуля
//------------

const tests = async () => {
    let a = new db.DBConnector(cfg.dbConnect);
    let l = new Logger();
    l.setDBConnector(a);
    try {
        //await l.warn("CONNECTING...");
        await a.connect();
        for (i = 0; i <= 1000; i++) await l.info(i);
        //await l.info("CONNECTED!");
        //await l.warn("READING SERVICES...");
        //let srv = await a.getServices();
        //await l.info(srv);
        console.log("1");
        await l.warn("DISCONNECTING...");
        console.log("2");
        await a.disconnect();
        console.log("3");
        await l.error("DISCONNECTED!");
        console.log("4");
    } catch (e) {
        await l.error("DISCONNECTING ON ERROR: " + e.message + "...");
        await a.disconnect();
        await l.error("DISCONNECTED!");
        throw e;
    }
};

tests()
    .then(r => {
        if (r) console.log(r);
        else console.log("SUCCESS!!!");
    })
    .catch(e => {
        if (e instanceof ServerError) {
            console.log("ServerError ERROR: " + e.sMessage);
        } else {
            console.log("ERROR: " + e.message);
        }
    });
/*
try {
    let a = new db.DBConnector(cfg.dbConnect);
    a.connect()
        .then(res => {
            console.log("CONNECTED");
            a.getOutgoing({ nPortionSize: cfg.outgoing.nPortionSize })
                .then(res => {
                    if (res.length > 0) {
                        res.map(r => {
                            console.log(r);
                        });
                    } else {
                        console.log("NO MESSAGES IN QUEUE!!!");
                    }
                    a.putLogErr()
                        .then(res => {
                            console.log(res);
                            setTimeout(() => {
                                a.disconnect()
                                    .then(res => {
                                        console.log("DISCONNECTED");
                                    })
                                    .catch(e => {
                                        console.log(e.code + ": " + e.message);
                                    });
                            }, 10000);
                        })
                        .catch(e => {
                            console.log(e.code + ": " + e.message);
                            setTimeout(() => {
                                a.disconnect()
                                    .then(res => {
                                        console.log("DISCONNECTED");
                                    })
                                    .catch(e => {
                                        console.log(e.code + ": " + e.message);
                                    });
                            }, 10000);
                        });
                })
                .catch(e => {
                    console.log(e.code + ": " + e.message);
                    a.disconnect()
                        .then(res => {
                            console.log("DISCONNECTED");
                        })
                        .catch(e => {
                            console.log(e.code + ": " + e.message);
                        });
                });
        })
        .catch(e => {
            console.log(e.code + ": " + e.message);
        });
} catch (e) {
    console.log(e.code + ": " + e.message);
}

/*

const log = new Logger();
log.error("Это ошибка");
log.warn("Предупреждение это");
log.info("Просто информация");



const test = async prms => {
    return new Promise((resolve, reject) => {
        if (prms == 0) {
            reject(new ServerError(1234, "Ошибка!"));
        } else {
            setTimeout(() => {
                resolve(prms + 1);
            }, 1000);
        }
    });
};

const callTest = async prms => {
    try {
        console.log("in async before");
        let a = await test(prms);
        console.log("in async after " + a);
        return a;
    } catch (e) {
        console.log("in async I'm here: " + e.code + " - " + e.message);
        throw e;
    }
};

process.on("unhandledRejection", err => {
    console.error("PROCESS ERROR: " + err.code + " - " + err.message);
    process.exit(0);
});

console.log("BEFORE");
callTest(0)
    .then(result => {
        console.log("MAIN RESULT: " + result);
    })
    .catch(err => {
        console.error("MAIN ERROR: " + err.code + " - " + err.message);
    });
console.log("AFTER");
*/
