class Car {
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */

  constructor({ price, maxSpeed }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  };

  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  };

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  get price() {
    return this._price;
  };

  set price(changedPrice) {
    return (this._price = changedPrice);
  };

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */

  turnOn() {
    this.isOn = true;
    console.log(`Авто моделі mustang успішно завелось!`);
  };

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    console.log(`Авто було успішно заглушено!`);
  };

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */

  accelerate(acceleratedSpeed) {
    if (this.speed + acceleratedSpeed <= this.maxSpeed) {
      this.speed = acceleratedSpeed;
    }

    console.log(`Авто прискорене на ${acceleratedSpeed} км/год`);
  };

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */

  decelerate(deceleratedSpeed) {
    if (this.speed - deceleratedSpeed !== 0) {
      this.speed -= deceleratedSpeed;
    }

    console.log(`Авто уповільнене на ${deceleratedSpeed} км/год`);
  };

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */

  drive(hours) {
    this.distance += hours * this.speed;
  };
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(`Ціна автомобіля становить ${mustang.price}$`); // 2000
mustang.price = 4000;
console.log(`Ціна автомобіля збільшилася через інфляцію, і відтепер становить ${mustang.price}$`); // 4000


