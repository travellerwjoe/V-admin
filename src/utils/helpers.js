/**
 * 元素是否在数组中
 * @param {*} value 
 * @param {array} arr 
 */
export function inArray(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true
        }
    }
    return false
}
