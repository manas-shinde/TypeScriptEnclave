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

