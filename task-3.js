class Storage {
    constructor({ someItems, someItem }) {
        this.items = someItems;
        this.item = someItem;
    };

    getItems() {
        return this.items;
    };

    addItem(someItem) {
        this.items.push(someItem);
    };

    removeItem = (someItem) => {
        const indexToRemove = this.items.indexOf(someItem);
        const splicedItems = this.items.splice(indexToRemove, 1);
        return splicedItems;
    };
};

const storage = new Storage({
  someItems: ["Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор"],
});

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
