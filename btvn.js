// let phone = [
//     {name :"Sony Xperia XZ",
//     brand : "sony",
//     price : "4428",
//     color : "white",
//     category : "phone",
// },
// {name :"oppo f3 plus",
// brand : "oppo",
// price : "5487",
// color : "black",
// category : "phone",
// },
// {name : "iphone 13pro max",
// brand : "apple",
// price : "21490",
// color : "gray",
// category : "phone",
// },
// {name :"samsung galaxy s8",
// brand : "samsung",
// price : "8490",
// color : "blue",
// category : "phone",
// }
// ]
// console.table(phone);
// for (i = 0; i < phone.length; i++) {
//     console.log(phone[i].name);
//     console.log(phone[i].price);
// }
//1.21.2. Viết script in / đăng xuất sản phẩm với số của chúng, sau đó in / đăng
//xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhap
// let input = Number(prompt("Please enter"));
// console.log(`${phone[input].name}`);
// console.log(`${phone[input].brand}`);
// console.log(`${phone[input].price}`);
// console.log(`${phone[input].color}`);
// console.log(`${phone[input].category}`);

//1.3. Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
// let userInput = prompt('Enter your category');
// for (i = 0; i < phone.length; i ++){
//     if (userInput == phone[i].category){
//         console.log(`${phone[i].name} `);
//         console.log(`${phone[i].price}`);
//         console.log(`${phone[i].category}`);
//     }
// }
//  1.4  Thêm nhà cung cấp vào từng sản phẩm
// for (i = 0; i < phone.length; i ++){
//     phone[i].provider = prompt('Enter your provider');
//     console.table(phone);
// }
// let a = prompt('Enter your provider');
// for (i = 0; i < phone.length; i ++){
//     if (a ==phone[i].provider){
//         console.log(`${phone[i].name} `);
//         console.log(`${phone[i].price}`);
//         console.log(`${phone[i].category}`);
//         console.log(`${phone[i].provider}`);
//     }
// }

//bài 2
let mission = [
    {
        1: "html",
        hoanthanh: "false",
    },
    {
        2: "css",
        hoanthanh: "false",
    },
    {
        3: "js",
        hoanthanh: "false",
    },
    {
        4: "node package mannager",
        hoanthanh: "false",
    },
    {
        5: "git",
        hoanthanh: "false",
    }
]
console.log(mission);

//2.2
let userInput = prompt('nhap vao c/r/u/d');
if( userInput == "c") {
    input = prompt('nhap vao nhiem vu moi ');
    for (let i = 0; i < mission.length; i++) {
        mission[i].input = "hoan thanh :false"
        console.log(mission);
    }

}else if( userInput == "u") {
    let a = prompt('nhap vao vi tri muon thay doi');
    let b = prompt('nhap vao tieu de muon thay doi');
for (let index = 0; index < mission.length; index++) {

}
}
// đến đây e chưa làm ddc