/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
 function find (obj, value) {
   let arr = [];
   for (var key in obj) {
     if (typeof obj[key] === "object") {
         if (find (obj[key], value) != null) arr.push([key, find (obj[key], value)]);
         console.log('Рекурсия ',arr);
     };
     if (obj[key] === value) {
         arr.push(key);

     }
   }
   if (arr.length === 0) return null;
   arr = arr.map(function(value){
       if (typeof value === "object")  {
           console.log("Сооденяем ",value);
           return value.join(".")
       };
       return value;
   })
   if (arr.length === 1) return arr[0];
   return arr;
 }
