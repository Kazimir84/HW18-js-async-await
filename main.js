console.log('----------Task 3----------');

function timeout(data, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (resolve(data))
        }, ms)
    });
}
timeout({name: "user"}, 1000).then((data) => console.log("Hello! Task 3", data));

console.log('----------Task 4----------')

async function getResult() {
    let result1 = await timeout(getUserInfo(), 1000);
    let result2 = await timeout(getUserAvatar(result1), 2000);
    let result3 = await timeout(getUserAdditionalInfo(result2), 3000);
    console.log('Result Task 4', result3);
}
getResult();

// // ================4.1 - 4.5======================================================

async function getUserInfo() {
    return ({ name: 'Vic', age: 21, id: 1 });
};

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg';
    return userInfo;
};

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    return userInfo;
}

console.log('----------Task 5----------')

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
    try {
      let user = await getUser();
      throw new Error('error from try Task 5');
    } catch (error) {
      console.log('Catch', error);
    };
};
getInfo();

















































// console.log('----------Task 3----------');
// function delay(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, ms);
//     });
//   };
// (async function() {
//     await delay(1000);
//     console.log("Hello!");
// }())

// async function delay2(ms) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello!"), ms);
//     });
//     let result = await promise;
//     console.log('Result', result)    
// } 
// delay2(1000);


// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 1000);
//     });
// }
// function getUserAvatar(userInfo) {
//     return new Promise(function (resolve, reject) {
//         userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
//         setTimeout(() => resolve(userInfo), 1000);
//     });
// }
// function getUserAdditionalInfo(userInfo) {
//     return new Promise(function (resolve, reject) {
//         userInfo.interests = ['sport', 'books'];
//         setTimeout(() => resolve(userInfo), 1000);
//     });
// }

// async function getResult() {
//     let result1 = await getUserInfo();
//     let result2 = await getUserAvatar(result1);
//     let result3 = await getUserAdditionalInfo(result2);
//     console.log('Result', result3);
// }
// getResult();

// // ================4.1 - 4.5======================================================

// async function getUserInfo2() {
//     let userInfo2 = new Promise(function (resolve, reject) {
//         setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 }), 1000);     
//     });       
//     return userInfo2; 
// }
// async function getUserAvatar2(userInfo) {
//     let userAvatar = new Promise(function (resolve, reject) {
//         userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
//         setTimeout(() => resolve(userInfo), 1000);        
//     });   
//     return userAvatar;
// }
// async function getUserAdditionalInfo2(userInfo) {
//     let additionalInfo = new Promise(function (resolve, reject) {
//         userInfo.interests = ['sport', 'books'];
//         setTimeout(() => resolve(userInfo), 1000);        
//     });       
//     return additionalInfo;
// }
// async function getResult2() {
//     let getUserInfoResult = await getUserInfo2();
//     let getUserAvatarResult = await getUserAvatar2(getUserInfoResult);
//     let getUserAdditionalInfoResult = await getUserAdditionalInfo2(getUserAvatarResult);
//     console.log('Result All', getUserAdditionalInfoResult);
//    }
// getResult2();

// console.log('----------Task 5----------')

// async function getUser() {
//     return { name: 'Vic', age: 21, id: 1 };
// }

// async function getInfo() {
//     try {
//       let user = await getUser();
//       throw new Error('error from try');
//     } catch (error) {
//       console.log('Catch', error);
//     };
// };
// getInfo();