/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} ageMax - максимальный возраст
 * @returns {string}
 */
function showSalary(data, ageMax) {
    return data.reduce((res,{balance,name,age}) => {
        if (age <= ageMax){
            res.push(`${name}, ${balance}`);
        }; 
        return res;      
    },[]).join('\n');
}
