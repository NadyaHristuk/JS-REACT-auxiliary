// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.

class Ship {
    constructor(name, life, armor, color, x, y, amunition) {
      this.name = name;
      this.life = life;
      this.armor = armor;
      this.color = color;
      this.x = x;
      this.y = y;
      this.amunition = amunition;
      this.speed = 0;
    }
  
    move(a, b) {
      this.x = a;
      this.y = b;
    }
  
    acc(number) {
      this.speed = number;
    }
  
    stop() {
      this.speed = 0;
    }
  
    fire() {
      if (this.amunition > 0) {
        this.amunition--;
      }
    }
  }
  
  class ES extends Ship {
    constructor(name, life, armor, color, x, y, amunition, torpeds, smokeAmunition) {
      super(name, life, armor, color, x, y, amunition)
      this._torpeds = torpeds;
      this.smokeAmunition = smokeAmunition;
    }
  
    get torpeds () {
      return this._torpeds;
    }
  
    set torpeds (number) {
      this._torpeds = number;
    }
  
    static showSpec(obj) {
      console.log(obj.life);
      console.log(obj.armor);
      console.log(obj.torpeds);
      console.log(obj.amunition);
      console.log(obj.smokeAmunition);
    }
  
    launchTorpeds() {
      if (this.torpeds > 0) {
        this.torpeds--
      }
    }
  
    launchSmoke() {
      if (this.smokeAmunition > 0) {
        this.smokeAmunition--
      }
    }
  }
  
  
  let player1 = new ES('Bob', 5000, 500, 'red', 45, 12, 50,41,12);
  player1.move(5,87);
  console.log(player1.torpeds);
  player1.torpeds = player1.torpeds*2;
  console.log(player1.torpeds);
  // ES.showSpec(player1);
  // Ship.desc(player1);
  // player1.greet();
  // player1.life = 10000;
  // console.log(player1.life)
  console.log(player1);