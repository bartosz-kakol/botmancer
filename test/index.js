const path = require("path");
const {Bot, Persistence} = require("../dist");
const config = require("./config.json");

const persistence = new Persistence(
    path.join(__dirname, "persist"),
    {
        foo: "test",
        bar: 13
    }
);
const bot = new Bot({
    featuresDirPath: path.join(__dirname, "features"),
    persistence,
    interactionStorageFilePath: path.join(__dirname, "interactions"),
    auth: {
        appId: config.appId,
        token: config.token
    },
    namedChannels: {
        "test": config.channel
    },
    sharedConfig: {}
});

bot.login();