let Parser = require('rss-parser');
// let parser = new Parser();

// async function rssParser(rssFlux) {
//     let feed = await parser.parseURL('https://apod.nasa.gov/apod.rss');
//     for (let index = 0; index < 1; index++) {

//         // return await feed.items[index].content.split('"')[3]
//         // feed.items[index].content.split('"')[3]
//     }
// };


class rssParser {
    constructor(rssFlux) {
        this.rssFlux = rssFlux
        this.parser = new Parser()
    }
    async parseItems() {
        let feed = await this.parser.parseURL(this.rssFlux);
        for (let index = 0; index < 1; index++) {
            return await feed.items[index]
        }
    }
}
module.exports.rssParser = rssParser