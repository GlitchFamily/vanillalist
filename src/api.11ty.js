class Main {
    data() {
        return {
            permalink: "/api/plugins.json",
        };
    }

    async render(data) {
        const list = (await Promise.all(data.collections.plugins.map(async plugin => {
            return {
                ...plugin,
                image: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 425, height: 270 }))),
                image2x: await this.getUrl(this.png(this.resize('./uploads/' + plugin.image, { width: 616, height: 390 })))
            }
        })));

        return JSON.stringify(list)
    }
}

module.exports = Main;
