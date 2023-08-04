"use strict";
var _a;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair(1, 'a');
let pair2 = new KeyValuePair('1', 'b');
console.log("Generics");
console.log(pair1);
console.log(pair2);
console.log("Generic functions:");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numberArr1 = ArrayUtils.wrapInArray(2);
let numberArr2 = ArrayUtils.wrapInArray('manas');
let numberArr3 = ArrayUtils.wrapInArray(true);
console.log(numberArr1);
console.log(numberArr2);
console.log(numberArr3);
function fetch(url) {
    if (url)
        return { data: null, error: null };
    else
        return { data: null, error: "error occured!" };
}
let result = fetch("url");
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.title);
function echo(msg) {
    console.log(msg);
}
echo("manas");
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
    get objects() {
        return this._objects;
    }
}
let store = new Store();
store.add({ name: 'a', price: 1, title: 'bread' });
console.log(store.find('name', 'a'));
class CompressibleStore extends Store {
    compress() {
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
//# sourceMappingURL=index.js.map