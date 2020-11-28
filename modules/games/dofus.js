const rss = require('../rssParser')
const htmlEntity = require('html-entities').AllHtmlEntities

function dofusNews(bot) {
    const dofusNews = new rss.rssParser('https://www.dofus.com/fr/rss/news.xml');
    dofusNews.parseItems().then((request) => {
        let data = dofusDecodeText(request)
        let dataTotal = dofusBreakShittyText(data)
        dataTotal = dataTotal.split('undefined')[1]

        // bot.users.fetch('246678645932818433')
        //     .then((user) => {
        //         user.send({
        //             embed: {
        //                 title: request.title,
        //                 url: request.link,
        //                 description: dataTotal,
        //                 color: 3797400,
        //                 footer: {
        //                     icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
        //                     text: "footer text"
        //                 },
        //                 thumbnail: {
        //                     url: "http://www.dofus.com/favicon.ico"
        //                 },
        //                 author: {
        //                     name: "Dofus"
        //                 }
        //             }
        //         })
        //     })
        //     .catch(console.error);

    })
}

function dofusDevblog(bot) {
    const dofusDevblog = new rss.rssParser('https://www.dofus.com/fr/rss/devblog.xml');
    dofusDevblog.parseItems().then((request) => {
        let data = dofusDecodeText(request)
        let dataTotal = dofusBreakShittyText(data)
        dataTotal = dataTotal.split('undefined')[1]
        console.log(dataTotal)
    })
}

function dofusChangelog(bot) {
    const dofusChangelog = new rss.rssParser('https://www.dofus.com/fr/rss/changelog.xml');
    dofusChangelog.parseItems().then((request) => {
        let data = dofusDecodeText(request)
        let dataTotal = dofusBreakShittyText(data)
        dataTotal = dataTotal.split('undefined')[1]
        console.log(dataTotal)
    })
}

function dofusDecodeText(request) {
    const entities = new htmlEntity();
    return entities.decode(request.contentSnippet).substring(0, 1500).split('\r\n') // decode html entity to string > substring for only 1500 chars > split line break
}

function dofusBreakShittyText(data) {
    let dataTotal
    for (let index = 0; index < data.length; index++) {
        if (data[index].length < 1) {
            dataTotal += '\n'
        } else {
            dataTotal += data[index]
        }
        if (data.length - 2 == index) {
            break;
        }
    }
    return dataTotal
}

module.exports.dofusNews = dofusNews
module.exports.dofusDevblog = dofusDevblog
module.exports.dofusChangelog = dofusChangelog
