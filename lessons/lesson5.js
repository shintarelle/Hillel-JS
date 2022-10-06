let userInfo = {
    name: "Vasya",
    age: 30,
    "58": "znachenie svoystva",
    showInfo() {
        console.log(`${this.name}`);
    },
}
console.log(userInfo["58"]);

let user = userInfo;
user.age = 45;
console.log(userInfo.age);

userInfo = null;
console.log(userInfo);
user.showInfo();          // Vasya
