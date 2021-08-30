# HW18-js-async-await

1. Создайте на вашем github репозиторий с именем HW18-js-async-await. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.
2. Создайте index.html в котором подключите js script.
3. Напишите функцию timeout(data, ms), которая возвращает новый промис, переходящий в состояние "resolved" через ms миллисекунд и передает в резолв данные которые принимает через аргумент data. В реализации данной функции используем явные промисы.
Пример использования:
delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))
4. Используйте async / await. Необходимо организовать цепочку промисов внутри асинхронной функции getResult.
	async function getResult() { тут должна быть цепочка вызовов }
4.1 Функции getUserInfo, getUserAvatar, getUserAdditionalInfo необходимо переписать в стиле async. Вместо setTimeout нужно использовать функцию delay которую написали в предыдущем задании (вызываеть ее нужно через async await).
4.2 Загрузить данные пользователя используем функцию getUserInfo.
4.3 Затем получить ссылку на аватар пользователя, для этого нужно использовать функцию getUserAvatar. Данная функция расширит и вернет обьект пользователя.
4.4 Затем получить дополнительную информацию по пользователю, для этого нужно использовать функцию getUserAdditionalInfo. Данная функция расширит и вернет обьект пользователя.
4.5 В конце вывести в консоль финальную версию полученного обьекта.
function getUserInfo() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
    });
  }
  function getUserAvatar(userInfo) {
    return new Promise(function(resolve, reject) {
      userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
      setTimeout(() => resolve(userInfo), 1000);
    });
  }
  function getUserAdditionalInfo(userInfo) {
    return new Promise(function(resolve, reject) {
      userInfo.interests = ['sport', 'books'];
      setTimeout(() => resolve(userInfo), 1000);
    });
  }


Пример использования:
async function getResult() { 
тут должна быть цепочка вызовов 
}
getResult();
 
5. Используйте async / await. Необходимо добавить обработку ошибок. Ошибка должна быть выведена в консоль.
 async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}
 
getInfo();
