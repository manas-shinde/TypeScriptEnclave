/**Generic Class */

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { }
}

let pair1 = new KeyValuePair(1, 'a');
let pair2 = new KeyValuePair('1', 'b');

console.log("Generics");
console.log(pair1);
console.log(pair2);


/**Generic functions */
console.log("Generic functions:");

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let numberArr1 = ArrayUtils.wrapInArray(2);
let numberArr2 = ArrayUtils.wrapInArray('manas');
let numberArr3 = ArrayUtils.wrapInArray(true);

console.log(numberArr1);
console.log(numberArr2);
console.log(numberArr3);

/** Generic Interface */
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    if (url)
        return { data: null, error: null };
    else
        return { data: null, error: "error occured!" };
}

interface Product {
    title: string
}

interface Users {
    name: string
}

let result = fetch<Product>("url");
console.log(result.data?.title);

/** Constrains on genericness */
/* The keyof operator */

function echo<T extends number | string>(msg: T) {
    console.log(msg);
}

echo("manas");
// echo(true); You wont be able to pass value to function whose type is not number or string

/* Extending Generic Classes */
interface Product {
    name: string,
    price: number
}

class Store<T>{
    protected _objects: T[] = [];

    add(object: T): void {
        this._objects.push(object);
    }

    // If T is Product
    // keyof T => 'name' | 'price'

    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }

    get objects() {
        return this._objects;
    }
}


let store = new Store<Product>();
store.add({ name: 'a', price: 1, title: 'bread' });
console.log(store.find('name', 'a'));

// Pass on the generic type parameter

class CompressibleStore<T> extends Store<T> {
    compress() {
    }
}

// Restrict the generic type parameter

// class SearchableStore<T extends { name: string }> extends Store<T> {
//     override find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name);
//     }
// }

// Fix the generic type parameter

class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}

/** Type Mapping */

interface Goods {
    name: string,
    price: number
}

//  creating new type using propertys of Good with readOnly
type ReadOnlyGoods = {
    readonly [property in keyof Goods]: Goods[property];
}

// In more like generic way for creating type of readonly with any of the interface
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
}


type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

let goods: ReadOnly<Goods> = {
    name: 'a',
    price: 1
}

/** Exercise */
// 1)

function echo1<T>(arg: T): T {
    return arg;
}

// 2)
function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

// 3)
class Entity<T>{
    constructor(public id: T) { }
}