let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
let currentDate = new Date(this.from);
let lastDate = new Date(this.to);

  // метод должен вернуть объект с методом next()
  return {
    next() {
        if (currentDate < lastDate) {
             currentDate.setDate(currentDate.getDate() + 1);
             let date = (currentDate.getDate() < 10) ? '0'+currentDate.getDate() : currentDate.getDate();
             date = (currentDate.getDay() === 0 || currentDate.getDay() === 6) ? `[${date}]` : `${date}`;
            return {
            done: false,
            value: date
            };
        } else {
            return {
            done: true
            };        
        }
    }

  }
};
