let searchMood = "title";
function getSearchMood(id) {
    if (id === "search-title") {
        searchMood = "title";
    } else {
        searchMood = "category";
    }
    search_Input.focus();
    search_Input.value = "";
    search_Input.placeholder = 'Search By ' + searchMood;
    readData();
}
function searchData(value) {
    let table = "";
    for (let i = 0; i < myArrayFor_objMyDateProudct.length; i++) {
        if (searchMood == "title") {
            if (myArrayFor_objMyDateProudct[i].title.includes(value.toLowerCase())) {
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
        } else {
            if (myArrayFor_objMyDateProudct[i].category.includes(value.toLowerCase())) {
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
        }
    }
    document.getElementById('serach-table').innerHTML = table;
}