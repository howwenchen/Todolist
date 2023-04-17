// 事件新增
let addEvent = document.querySelector("#add");

function add_and_create(e) {
  e.preventDefault();
  //創建標籤
  let content = document.createElement("div");
  content.classList.add("todo_div");

  //創建文字區域
  let p_text = document.createElement("p");
  p_text.classList.add("todo_ptext");
  let p_datetime = document.createElement("p");
  p_datetime.classList.add("todo_pdatetime");

  //創建按鈕
  let check = document.createElement("button");
  check.classList.add("check");
  check.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>';
  let del = document.createElement("button");
  del.classList.add("delete");
  del.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';

  //加入文字
  let text = document.querySelector("#text").value;
  let datetime =
    document.querySelector("#month").value +
    " / " +
    document.querySelector("#date").value;
  p_datetime.innerText = datetime;
  p_text.innerText = text;

  //新增至section
  content.appendChild(p_text);
  content.appendChild(p_datetime);
  content.appendChild(check);
  content.appendChild(del);
  document.querySelector("section").appendChild(content);
}

//用按鈕加入
addEvent.addEventListener("click", add_and_create);

//用enter加入
addEvent.addEventListener("keypress", (e) => {
  if (e.key == enter) {
    add_and_create();
  }
});

//事件刪除&事件確認
let delEvent = document.querySelector("section");
delEvent.addEventListener("click", (e) => {
  //事件刪除
  if (e.target.classList == "delete") {
    e.target.parentElement.remove();
  }
  if (e.target.classList == "fa-solid fa-trash-can-arrow-up") {
    e.target.parentElement.parentElement.remove();
  }
});

// let checkevent =document.querySelector("section")
// checkevent.addEventListener.apply("click",e =>{
//     //事件確認
//  if (e.target.classList == "check") {
//     e.target.
//   }
// })

//照時間排序
let sortEvent = document.querySelector("#sort");
sortEvent.addEventListener("click", () => {});
