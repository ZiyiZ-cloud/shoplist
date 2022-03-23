const { INSPECT_MAX_BYTES } = require("buffer");
const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findAll() {
        return items
    }

    static update(name, data) {
        let foundItem = Item.findAll(name);
        if (foundItem === undefined) {
            throw { message: 'Not Found', status: 404 }
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    static find(name) {
        const foundItem = items.find(x => x.name === name);
        if (foundItem === undefined) {
            throw { message: 'Not Found', status: 404 }
        }
        return foundItem
    }

    static remove(name) {
        const foundItem = items.find(x => x.name === name)
        if (foundItem === undefined) {
            throw { message: 'Not Found', status: 404 }
        }
        items.splice(foundItem, 1)
    }
}

module.exports = Item;