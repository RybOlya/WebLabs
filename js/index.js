let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let description = document.getElementById("description");
let msg = document.getElementById("msg");
let dwelling = document.getElementById("dwelling");
let add = document.getElementById("add");
let priceInput = document.getElementById("priceInput");
let floorsInput = document.getElementById("floorsInput");
let heatingInput = document.getElementById("heatingInput");
let locationInput = document.getElementById("locationInput");
let dwellingType = document.getElementById("dwellingType");

let addedDwelling = document.getElementById("addedDwelling");
var submitted = form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (titleInput.value == "") {
    console.log("failure");
    msg.innerHTML = "Dwelling cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};
let dwellings = [];
let image = "";
let acceptData = () => {
  dwellings.push({
    img: image,
    type: dwellingType.value,
    title: titleInput.value,
    description: description.value,
    location: locationInput.value,
    price: priceInput.value,
    floors: floorsInput.value,
    heating: heatingInput.value,
  });
  localStorage.setItem("dwellings", JSON.stringify(dwellings));
  createDwelling();
};

let resetForm = () => {
  image = "";
  dwellingType.value = "";
  titleInput.value = "";
  description.value = "";
  locationInput.value = "";
  activeIMG.src = "";
  priceInput.value = "";
  heatingInput.value = "";
};

var activeIMG = null;
var loadFile = function (event) {
  activeIMG = document.getElementById("output");
  activeIMG.src = URL.createObjectURL(event.target.files[0]);
  image = activeIMG.src;
};
let createDwelling = () => {
  dwelling.innerHTML = "";
  dwellings.map((x, y) => {
    console.log(y);
    return (dwelling.innerHTML += `
          <div class="card" id="${y}">
              <div class="card__image"><img src= "${x.img}"></div>
              <span class="small text-secondary">${x.type}</span>
              <span class="dwelling__name fw-bold">${x.title} </span>
              <span class="location fw-bold small">${x.location} </span>
              <span class="price font-monospace ">${x.price}</span>
              <span class="heating small text-secondary">Heating: ${x.heating}</span>
              <p>${x.description}</p>
              <span class="options">
                <i onClick= "editDwelling(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onClick ="deleteDwelling(this);createDwelling()" class="fas fa-trash-alt"></i>
                <i onClick= "buyDwelling(this)" class="fas fa-plus"></i>
              </span>
            </div>`);
  });
  resetForm();
};
let fin_price = 0;
let buyDwelling = (e) => {
  let selectedDwelling = e.parentElement.parentElement;

  priceInput.value = selectedDwelling.children[4].innerHTML;
  fin_price += parseInt(selectedDwelling.children[4].innerHTML);

  document.getElementById("total_price").value = fin_price;
  console.log(fin_price);
  return (addedDwelling.innerHTML += `
          <div class="basket" id="${selectedDwelling.id}">
          <span class="dwelling__name fw-bold">${selectedDwelling.children[2].innerHTML}</span></br>
              <span class="price font-monospace ">${selectedDwelling.children[4].innerHTML}</span>
              <span class="options">
                <i onClick ="deleteItem(this);" class="fas fa-trash-alt"></i>
              </span>
            </div>`);
};
let deleteItem = (e) => {
  fin_price -= parseInt(e.parentElement.parentElement.children[2].innerHTML);
  console.log(fin_price);
  document.getElementById("total_price").value = fin_price;
  console.log(e.parentElement.parentElement.children[2].innerHTML);
  e.parentElement.parentElement.remove();
  addedDwelling.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("addedDwelling", JSON.stringify(addedDwelling));
};

let deleteDwelling = (e) => {
  e.parentElement.parentElement.remove();

  dwellings.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("dwellings", JSON.stringify(dwellings));
};
let editDwelling = (e) => {
  let selectedDwelling = e.parentElement.parentElement;
  image = selectedDwelling.children[0].innerHTML;
  dwellingType.value = selectedDwelling.children[1].innerHTML;
  titleInput.value = selectedDwelling.children[2].innerHTML;
  locationInput.value = selectedDwelling.children[3].innerHTML;
  priceInput.value = selectedDwelling.children[4].innerHTML;
  heatingInput.value = selectedDwelling.children[5].innerHTML;
  description.value = selectedDwelling.children[6].innerHTML;
  deleteDwelling(e);
};
(() => {
  dwellings = JSON.parse(localStorage.getItem("dwellings")) || [];
  console.log(dwellings);
  createDwelling();
})();

function sortDwellings() {
  var list,
    i,
    switching,
    b,
    a,
    shouldSwitch,
    dir,
    switchcount = 0;
  list = document.getElementById("dwelling");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    a = list.getElementsByClassName("card");
    b = list.getElementsByClassName("dwelling__name");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      a[i].parentNode.insertBefore(a[i + 1], a[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function searchFor() {
  var input, filter, b, card, a, i, txtValue;
  input = document.getElementById("findDwelling");
  filter = input.value.toUpperCase();
  list = document.getElementById("dwelling");
  card = list.getElementsByClassName("card");
  for (i = 0; i < card.length; i++) {
    b = card[i].getElementsByClassName("dwelling__name")[0];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
