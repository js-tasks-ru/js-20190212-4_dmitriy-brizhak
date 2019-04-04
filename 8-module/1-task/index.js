'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    const tb = this.el.createTBody();
    const th = this.el.createTHead();

    const tr = th.insertRow();
    for (let key in items[0]){
        let td = tr.insertCell();
        td.innerHTML = key[0].toUpperCase() + key.substr(1).toLowerCase();
    }
    
    for (let i = 0; i < items.length; i++){
        //debugger;
        let tr = tb.insertRow();
        for (let key in items[i]){
            let td = tr.insertCell();
            td.innerHTML = items[i][key];
        }
    }

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
       //debugger;
        let arr = [...this.el.tBodies[0].rows];
        if (isNaN(arr[0].cells[column].innerText)) {
            arr.sort((a,b) => {
                if (a.cells[column].innerHTML < b.cells[column].innerHTML) return -1;
                return 1;
            });
        } else {
            arr.sort((a,b) => a.cells[column].innerText - b.cells[column].innerText);
        }
        //debugger;
        if (desc) arr.reverse();
        for (let i = 0; i<arr.length; i++){
            this.el.tBodies[0].appendChild(arr[i]);
        }
     };
}

