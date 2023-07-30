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

function echo<T extends number | string>(msg: T) {
    console.log(msg);
}

echo("manas");
// echo(true); You wont be able to pass value to function whose type is not number or string
