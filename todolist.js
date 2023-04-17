// 事件新增
let addEvent = document.querySelector("#add");
let uncompelete_event = 0;
let compelete_event = 0;
let uncompelete = document.querySelector(".uncompelete_num");
uncompelete.innerHTML = uncompelete_event;
let compelete = document.querySelector(".compelete_num");
compelete.innerHTML = compelete_event;

function add_and_create(e) {
  e.preventDefault();
  //增加未完成數量
  uncompelete_event++;
  uncompelete.innerHTML = uncompelete_event;

  //創建標籤
  let content = document.createElement("div");
  content.classList.add("todo_div");

  //創建文字區域
  let p_text = document.createElement("p");
  p_text.classList.add("todo_ptext");
  let p_datetime = document.createElement("p");
  p_datetime.classList.add("todo_pdatetime");

  //加入文字
  let text = document.querySelector("#text").value;
  let month = document.querySelector("#month").value;
  let date = document.querySelector("#date").value;
  let datetime = month + " / " + date;
  p_datetime.innerText = datetime;
  p_text.innerText = text;
  if (p_text.innerText == "") {
    alert("請輸入文字");
    return;
  }

  //創建按鈕
  let check = document.createElement("button");
  check.classList.add("check");
  check.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
  let del = document.createElement("button");
  del.classList.add("delete");
  del.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';

  //新增至section
  content.appendChild(p_text);
  content.appendChild(p_datetime);
  content.appendChild(check);
  content.appendChild(del);
  document.querySelector("section").appendChild(content);

  //新增動畫
  content.style.animation = "scaleUp 0.3s forwards";

  //建立一個物件放資料
  let todoText = {
    text: text,
    month: month,
    date: date,
  };

  //新增至localstorage
  let add_localstorange = localStorage.getItem("list");
  if (add_localstorange == null) {
    localStorage.setItem("list", JSON.stringify([todoText]));
  } else {
    let pushList = JSON.parse(add_localstorange);
    pushList.push(todoText);
    localStorage.setItem("list", JSON.stringify(pushList));
  }
}

//用按鈕加入
addEvent.addEventListener("click", add_and_create);

//用enter加入
addEvent.addEventListener("keypress", (e) => {
  if (e.key == enter) {
    add_and_create();
  }
});

//事件刪除
let delEvent = document.querySelector("section");
delEvent.addEventListener("click", (e) => {
  let delitem = e.target.parentElement;

  //從標籤刪除
  if (e.target.classList == "delete") {
    delitem.remove();
  }

  //移除數量
  if (e.target.parentElement.classList == "done") {
    compelete_event -= 1;
    compelete.innerHTML = compelete_event;
  } else {
    uncompelete_event -= 1;
    uncompelete.innerHTML = uncompelete_event;
  }

  //從localstorage刪除
  let innertext = delitem.children[0].innerText;
  let pulllist = JSON.parse(localStorage.getItem("list"));
  pulllist.forEach((item, index) => {
    if (item.text == innertext) {
      pulllist.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(pulllist));
    }
  });
});

//事件確認
let checkevent = document.querySelector("section");
checkevent.addEventListener("click", (e) => {
  //確認
  if (e.target.classList == "check") {
    e.target.parentElement.classList.toggle("done");
  }

  //增加完成數量
  if (e.target.parentElement.classList != "done") {
    compelete_event++;
    compelete.innerHTML = compelete_event;
    uncompelete_event--;
    uncompelete.innerHTML = uncompelete_event;
  } else {
    compelete_event--;
    compelete.innerHTML = compelete_event;
    uncompelete_event++;
    uncompelete.innerHTML = uncompelete_event;
  }
});

//從localstorage抓資料
let pullstorage = localStorage.getItem("list");
if (pullstorage != null) {
  let pushList = JSON.parse(pullstorage);
  pushList.forEach((item) => {
    //創建標籤
    let content = document.createElement("div");
    content.classList.add("todo_div");

    //創建文字區域
    let p_text = document.createElement("p");
    p_text.classList.add("todo_ptext");
    let p_datetime = document.createElement("p");
    p_datetime.classList.add("todo_pdatetime");

    //加入文字
    p_datetime.innerText = item.month + " / " + item.date;
    p_text.innerText = item.text;

    //創建按鈕
    let check = document.createElement("button");
    check.classList.add("check");
    check.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';

    //新增至section
    content.appendChild(p_text);
    content.appendChild(p_datetime);
    content.appendChild(check);
    content.appendChild(del);
    document.querySelector("section").appendChild(content);
  });
}
