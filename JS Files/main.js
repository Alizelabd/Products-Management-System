// Start  Get Inputs !
let title_Input = document.getElementById("title");
let price_Input = document.getElementById("price");
let taxes_Input = document.getElementById("taxes");
let ads_Input = document.getElementById("ads");
let discount_Input = document.getElementById("discount");
let count_Input = document.getElementById("count");
let category_Input = document.getElementById("category");
let search_Input = document.getElementById("search");
// End  Get Inputs !
let total$Div = document.querySelector(".total");
// Start  Get Button !
let create$Btn = document.getElementById("create");
let title$Box = document.querySelector(".title-box");
// End  Get Button !
let moodData = "create";
let indexArrayForUpdate;
// START GET TOTAL FUNCTION!!
let resultPrice;
function getTotalPrice() {
    if (price_Input.value != '') {
        // let resultPrice = parseInt((price_Input.value + taxes_Input.value + ads_Input.value) - discount_Input.value);
        resultPrice = (+price_Input.value + +taxes_Input.value + +ads_Input.value) - discount_Input.value;
        total$Div.innerHTML = resultPrice;
        total$Div.style.backgroundColor = 'green';
    } else {
        total$Div.innerHTML = '';
        total$Div.style.backgroundColor = "red";
    }
    // console.log(price_Input.value);
}
// Create Proudct
let myArrayFor_objMyDateProudct = [];
if (localStorage.product != null) {
    myArrayFor_objMyDateProudct = JSON.parse(localStorage.getItem('product'));
}
create$Btn.onclick = () =>  {
    const objMyDateProudct = {
        title: title_Input.value.toLowerCase(),
        price: price_Input.value,
        taxes: taxes_Input.value,
        ads: ads_Input.value,
        discount: discount_Input.value,
        count: count_Input.value,
        category: category_Input.value.toLowerCase(),
        total: total$Div.innerHTML
    }
    if (title_Input.value != "" && price_Input.value != "" && category_Input.value != "") {
        // create$Btn.setAttribute("data-bs-dismiss", "modal");
        if (moodData === "create") {
            // if (objMyDateProudct.count > 1) {
            //     for (let i = 0; i < objMyDateProudct.count; i++) {
                    myArrayFor_objMyDateProudct.push(objMyDateProudct);
            //     }
            // } else {
            //     myArrayFor_objMyDateProudct.push(objMyDateProudct);
            // }
        } else {
            myArrayFor_objMyDateProudct[indexArrayForUpdate] = objMyDateProudct;
        }
        clearInputs();
    }
    localStorage.setItem("product", JSON.stringify(myArrayFor_objMyDateProudct));
    readData();
}
function switchMood() {
    moodData = "create";
    create$Btn.innerHTML = "Create";
    title$Box.innerHTML = "Create New Product";
    count_Input.style.display = "inline-flex";
    clearInputs();
}
// Clear Inputs Function
function clearInputs() {
    title_Input.value = '';
    price_Input.value = '';
    taxes_Input.value = '';
    ads_Input.value = '';
    discount_Input.value = '';
    count_Input.value = '';
    category_Input.value = '';
    total$Div.innerHTML = '';
    resultPrice = "";
}
// READ DATA FROM ARRAY
function readData() {
    let table = "";
    for (let i = 0; i < myArrayFor_objMyDateProudct.length; i++) {
        table +=
            `<tr>
        <td>${i + 1}</td>
        <td>${myArrayFor_objMyDateProudct[i].title}</td>
        <td>${myArrayFor_objMyDateProudct[i].price}</td>
        <td>${myArrayFor_objMyDateProudct[i].taxes}</td>
        <td>${myArrayFor_objMyDateProudct[i].ads}</td>
        <td>${myArrayFor_objMyDateProudct[i].discount}</td>
        <td>${myArrayFor_objMyDateProudct[i].total}</td>
        <td>${myArrayFor_objMyDateProudct[i].category}</td>
        <td>${myArrayFor_objMyDateProudct[i].count}</td>
        <td><button onclick="updateData(${i})" class="text-capitalize text-bg-warning" data-bs-toggle="modal" data-bs-target="#createproudct"
        data-bs-whatever="@mdo">update</button></td>
        <td><button onclick="deleteData(${i})" class="text-capitalize text-bg-danger">delete</button></td>
        </tr>`;
    }
    document.getElementById('body-table').innerHTML = table;
    document.getElementById('serach-table').innerHTML = table;
    let deleteAllBtn = document.getElementById("delete-all");
    let countArray = document.getElementById("count-array");
    if (myArrayFor_objMyDateProudct.length > 0) {
        deleteAllBtn.style.display = "block";
        countArray.innerHTML = `(${myArrayFor_objMyDateProudct.length})`;
    } else {
        deleteAllBtn.style.display = "none";
    }
}
readData();
// DELETE BUTTON FUNCTION
function deleteData(e) {
    myArrayFor_objMyDateProudct.splice(e, 1);
    localStorage.product = JSON.stringify(myArrayFor_objMyDateProudct);
    readData();
}
function deleteAllProducts() {
    localStorage.clear();
    myArrayFor_objMyDateProudct = [];
    readData();
}
// UPDATE FUNCTION
function updateData(e) {
    title_Input.value = myArrayFor_objMyDateProudct[e].title;
    price_Input.value = myArrayFor_objMyDateProudct[e].price;
    taxes_Input.value = myArrayFor_objMyDateProudct[e].taxes;
    ads_Input.value = myArrayFor_objMyDateProudct[e].ads;
    discount_Input.value = myArrayFor_objMyDateProudct[e].discount;
    category_Input.value = myArrayFor_objMyDateProudct[e].category;
    count_Input.value = myArrayFor_objMyDateProudct[e].count;
    // count_Input.style.display = "none";
    getTotalPrice();
    indexArrayForUpdate = e;
    moodData = "update";
    create$Btn.innerHTML = "Update";
    title$Box.innerHTML = "Update Data Product";
}
// Search Function
// let searchMood = "title";
// function getSearchMood(id) {
//     if (id === "search-title") {
//         searchMood = "title";
//     } else {
//         searchMood = "category";
//     }
//     search_Input.focus();
//     search_Input.value = "";
//     search_Input.placeholder = 'Search By ' + searchMood;
//     readData();
// }
// function searchData(value) {
//     let table = "";
//     for (let i = 0; i < myArrayFor_objMyDateProudct.length; i++) {
//         if (searchMood == "title") {
//             if (myArrayFor_objMyDateProudct[i].title.includes(value.toLowerCase())) {
//                 table +=
//                     `<tr>
//             <td>${i + 1}</td>
//             <td>${myArrayFor_objMyDateProudct[i].title}</td>
//             <td>${myArrayFor_objMyDateProudct[i].price}</td>
//             <td>${myArrayFor_objMyDateProudct[i].taxes}</td>
//             <td>${myArrayFor_objMyDateProudct[i].ads}</td>
//             <td>${myArrayFor_objMyDateProudct[i].discount}</td>
//             <td>${myArrayFor_objMyDateProudct[i].total}</td>
//             <td>${myArrayFor_objMyDateProudct[i].category}</td>
//             <td>${myArrayFor_objMyDateProudct[i].count}</td>
//             <td><button onclick="updateData(${i})" class="text-capitalize text-bg-warning" data-bs-toggle="modal" data-bs-target="#createproudct"
//             data-bs-whatever="@mdo">update</button></td>
//             <td><button onclick="deleteData(${i})" class="text-capitalize text-bg-danger">delete</button></td>
//             </tr>`;
//             }
//         } else {
//             if (myArrayFor_objMyDateProudct[i].category.includes(value.toLowerCase())) {
//                 table +=
//                     `<tr>
//             <td>${i + 1}</td>
//             <td>${myArrayFor_objMyDateProudct[i].title}</td>
//             <td>${myArrayFor_objMyDateProudct[i].price}</td>
//             <td>${myArrayFor_objMyDateProudct[i].taxes}</td>
//             <td>${myArrayFor_objMyDateProudct[i].ads}</td>
//             <td>${myArrayFor_objMyDateProudct[i].discount}</td>
//             <td>${myArrayFor_objMyDateProudct[i].total}</td>
//             <td>${myArrayFor_objMyDateProudct[i].category}</td>
//             <td>${myArrayFor_objMyDateProudct[i].count}</td>
//             <td><button onclick="updateData(${i})" class="text-capitalize text-bg-warning" data-bs-toggle="modal" data-bs-target="#createproudct"
//             data-bs-whatever="@mdo">update</button></td>
//             <td><button onclick="deleteData(${i})" class="text-capitalize text-bg-danger">delete</button></td>
//             </tr>`;
//             }
//         }
//     }
//     document.getElementById('serach-table').innerHTML = table;
// }
// created by Aleiz Bahar@
