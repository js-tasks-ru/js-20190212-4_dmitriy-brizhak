'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const thead = table.rows[0].cells;
    const tr = table.rows;
    //debugger;
    let age, gender, status;
    for (let i = 0; i < thead.length; i++) {
        if (thead[i].innerHTML === 'Age') age = i;
        if (thead[i].innerHTML === 'Gender') gender = i;
        if (thead[i].innerHTML === 'Status') status = i;
    }

    for (let i = 1; i < tr.length; i++){
        if (tr[i].cells[status].dataset.available) {
            tr[i].classList.add( (tr[i].cells[status].dataset.available === 'true') ? 'available' : 'unavailable');
        } else {
            tr[i].setAttribute('hidden','hidden');
        };
        tr[i].classList.add( (tr[i].cells[gender].innerHTML === 'm') ? 'male' : 'female');
        if (tr[i].cells[age].innerHTML < 18) {
            tr[i].setAttribute('style',"text-decoration: line-through");
        }
    }
}



