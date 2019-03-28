'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
 function getMinMax(str) {
     const result = str.match( /[\d.-]+/ig ).reduce(function(minMax, current, i){
         current = +current;
         if (i == 0) return minMax = {min:current, max:current};
         if (minMax.min > current) minMax.min = current;
         if (minMax.max < current) minMax.max = current;
         return minMax;
     },{});
     return result;
 }
