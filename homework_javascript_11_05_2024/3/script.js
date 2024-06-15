let person = {
    _firstName: "Amir",
    _lastName: "Dubrovskiy",
    _currentDay: 15,
    _currentMonth: 6,
    _currentYear: 2024,
  
    get currentDay() {
      return this._currentDay
    },
    set currentDay(day) {
      if (typeof day === 'number' && day >= 1 && day <= 31) {
        this._currentDay = day
      } else {
        console.error("Неверное значение дня")
      }
    },
  
    get currentMonth() {
      return this._currentMonth
    },
    set currentMonth(month) {
      if (typeof month === 'number' && month >= 1 && month <= 12) {
        this._currentMonth = month
      } else {
        console.error("Неверное значение месяца")
      }
    },
  
    get currentYear() {
      return this._currentYear
    },
    set currentYear(year) {
      if (typeof year === 'number' && year >= 1900 && year <= 2100) {
        this._currentYear = year
      } else {
        console.error("Неверное значение года")
      }
    }
  }
  
  person._firstName = "Genadiy";
  person._lastName = "Pushkin";
  
  for (let key in person) {
    if (person.hasOwnProperty(key) && typeof person[key] !== 'function') {
      console.log(`${key}: ${person[key]}`);
    }
  }