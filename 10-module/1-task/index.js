(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            const table = this;
            this.el = document.createElement('table');
            this.data = data;
            this.el.classList.add('pure-table');
            const tb = this.el.createTBody();
            const th = this.el.createTHead();

            const tr = th.insertRow();
            for (let key in data[0]){
                if (key === 'id') continue;
                let td = tr.insertCell();
                td.innerHTML = key[0].toUpperCase() + key.substr(1).toLowerCase();
            }
            tr.insertCell();
            
            for (let i = 0; i < data.length; i++){
                let tr = tb.insertRow();
                for (let key in data[i]){
                    if (key === 'id') continue;
                    let td = tr.insertCell();
                    td.innerHTML = data[i][key];
                }
                let td = tr.insertCell();
                const a = document.createElement('a');
                a.href = '#delete';
                a.innerHTML = 'X';
                a.setAttribute('data-id', data[i].id)
                td.appendChild(a);
            }
            this.el.onclick = function(event) {
                if (!event.target.hasAttribute('data-id')) return;
                const id = event.target.getAttribute('data-id');
                event.target.closest('tr').remove();
                table.onRemoved(+id);
              };

        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {}
    }

    

    window.ClearedTable = ClearedTable;
})();
