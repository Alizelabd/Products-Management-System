function getData(){
    for (let i = 0; i < myArrayFor_objMyDateProudct.length; i++){
        let product;
        product = `
        <div class="col">
        <div class="card text-bg-primary text-center h-100">
            <img src="./img/products.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <div class="head">
                    <span class="title fw-bold">${myArrayFor_objMyDateProudct[i].title}</span>
                    <div class="category fw-bold text-black">Category: <span>${myArrayFor_objMyDateProudct[i].category}</span></div>
                </div>
            </div>
            <div class="card-footer">
                <div class="price fw-bold text-bg-dark">Price: <span>${myArrayFor_objMyDateProudct[i].total}</span>$</div>
                <div class="count fw-bold">Count: <span class="">${myArrayFor_objMyDateProudct[i].count}</span></div>
            </div>
        </div>
    </div>
        `
        document.querySelector(".data").innerHTML += product;
    }
}
getData();
function searchProudcts(value) {
    let product = "";
    for (let i = 0; i < myArrayFor_objMyDateProudct.length; i++) {
            if (myArrayFor_objMyDateProudct[i].title.includes(value.toLowerCase())) {
                product += `
                <div class="col">
                <div class="card text-bg-primary text-center h-100">
                    <img src="./img/products.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="head">
                            <span class="title fw-bold">${myArrayFor_objMyDateProudct[i].title}</span>
                            <div class="category fw-bold text-black">Category: <span>${myArrayFor_objMyDateProudct[i].category}</span></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="price fw-bold text-bg-dark">Price: <span>${myArrayFor_objMyDateProudct[i].total}</span>$</div>
                        <div class="count fw-bold">Count: <span class="">${myArrayFor_objMyDateProudct[i].count}</span></div>
                    </div>
                </div>
            </div>
                `
            }
        } 
        
        document.querySelector(".data").innerHTML = product;
    }
