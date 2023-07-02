'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


function resetForm() {
  // Obtener referencias a los campos del formulario
  var fullNameInput = document.querySelector('.inputfield:nth-of-type(1) .input');
  var usernameInput = document.querySelector('.inputfield:nth-of-type(2) .input');
  var dobInput = document.querySelector('.inputfield:nth-of-type(3) .input');
  var passwordInput = document.querySelector('.inputfield:nth-of-type(4) .input');
  var confirmPasswordInput = document.querySelector('.inputfield:nth-of-type(5) .input');
  var addressTextarea = document.querySelector('.inputfield:nth-of-type(6) .textarea');
  var userProfileSelect = document.querySelector('.inputfield:nth-of-type(7) select');
  var emailAddressInput = document.querySelector('.inputfield:nth-of-type(8) .input');
  var categoriesCheckboxList = document.querySelectorAll('.inputfield:nth-of-type(9) input[type="checkbox"]');
  
  // Reiniciar los valores de los campos del formulario
  fullNameInput.value = '';
  usernameInput.value = '';
  dobInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  addressTextarea.value = '';
  userProfileSelect.selectedIndex = 0;
  emailAddressInput.value = '';
  
  // Desmarcar los checkboxes de categorías de interés
  for (var i = 0; i < categoriesCheckboxList.length; i++) {
    categoriesCheckboxList[i].checked = false;
  }
}