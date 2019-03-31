'use strict'
/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = (obj[key] !== null && typeof obj[key]  === 'object') ? clone (obj[key]) :  obj[key];    
    }
    return newObj;
}