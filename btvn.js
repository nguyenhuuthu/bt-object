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
// let mission = [
//     {
//         id1: "html",
//         hoanthanh: "false",
//     },
//     {
//         id2: "css",
//         hoanthanh: "false",
//     },
//     {
//         id3: "js",
//         hoanthanh: "false",
//     },
//     {
//         id4: "node package mannager",
//         hoanthanh: "false",
//     },
//     {
//         id5: "git",
//         hoanthanh: "false",
//     }
// ]
// console.log(mission);

//2.2
// let userInput = prompt('nhap vao c/r/u/d');
// if( userInput == "c") {
//     input = prompt('nhap vao nhiem vu moi ');
//     for (let i = 0; i < mission.length; i++) {
//         mission[i].input = "hoan thanh :false"
//         console.log(mission);
//     }

// }else if( userInput == "u") {
//     let a = prompt('nhap vao vi tri muon thay doi');
//     let b = prompt('nhap vao tieu de muon thay doi');
// objIndex = mission.findIndex((obj => obj.id == a));

// console.log("Before update: ", mission[objIndex])

// mission[objIndex].id2 = "hoanthanh :false"

// console.log("After update: ", mission[objIndex])
// }

//2 + 2.6
let learning = [
    {
      id: 1,
      name: "HTML",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 2,
      name: "CSS",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 3,
      name: "Basic of javascript",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 4,
      name: "Node package Manager (npm)",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 5,
      name: "Git",
      complete: "false",
      check: "[ ]",
    },
  ];
  
  //2.2 add new
  while (true) {
    let command = prompt("Enter your command(New, Delete, Update, Complete)");
    if (command == "new") {
      let taskInput = prompt("Enter new task:");
      learning.push({
        id: learning.length + 1,
        name: taskInput,
        complete: false,
        check: "[ ]",
      });
      console.clear();
  
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("--------------------");
  
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      } //2.3 update
    }
    if (command == "update") {
      let position = Number(prompt("Enter position "));
      let title = prompt("Enter new title");
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].name = title;
          console.log(learning[key].name);
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("-------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    //2.4 complete
    if (command == "complete") {
      let position = Number(prompt("Nhập vị trí để hoàn thành"));
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].complete = true;
          learning[key].check = "[x]";
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    if (command == "d") {
      let position = Number(prompt("Nhập vị trí muốn xóa"));
      for (let key in learning) {
        if (position == learning[key].id) {
          delete learning[key];
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    } else if (command == "e") {
      break;
    }
  }