import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
// flsFunctions.inputFile();


/* ********************************************************************** */
const descriptions = document.getElementsByClassName('item__description');

for (let i = 0; i < descriptions.length; i++) {
  let description = descriptions[i].innerHTML;
  let trimmedDescription = description.substring(0, 105) + '...';
  descriptions[i].innerHTML = trimmedDescription;
}
/* ********************************************************************** */
/* ********************************Swiper******************************** */
const swiperServices = new Swiper(".section-js", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  },
});
/* ********************************************************************** */
/* ******************************Materialize***************************** */
const elTabs = document.querySelectorAll('.tabs')
const iTabs = M.Tabs.init(elTabs);

const eSidenav = document.querySelectorAll('.sidenav');
const iSidenav = M.Sidenav.init(eSidenav);


var filterContainer = document.querySelector('#filter li');
var filterForm = document.querySelector('.filter__form');
var filterElement = document.querySelector('.filter');

// Function to move the filter form to the filter container
function moveFilterForm() {
  filterContainer.appendChild(filterForm);
}

function restoreFilterForm() {
  filterElement.appendChild(filterForm);
}

function handleFilterForm() {
  if (window.innerWidth <= 991) {
    moveFilterForm();
  } else {
    restoreFilterForm();
  }
}

// Add event listener for 'resize' event
window.addEventListener('resize', handleFilterForm);

// Add event listener for 'load' event
window.addEventListener('load', handleFilterForm);





const eModal = document.querySelectorAll('.modal');
const iModal = M.Modal.init(eModal);

const eSelect = document.querySelectorAll('select');
const iSelect = M.FormSelect.init(eSelect);

const eCollapsible = document.querySelectorAll('.collapsible');
const iCollapsible = M.Collapsible.init(eCollapsible);

/* ********************************************************************** */
/* ******************************Input File***************************** */
function inputfile() {
  const fileManager = document.querySelector('[js-file-manager]');

    class FileManager {
        static chipTemplate = (text, id) => {
            return `
      <span id="${id}" class="chip">
        <span class="chip__text">${text}</span>
      </span>
    `;
        }

        static generateId = () => {
            const randomId = (Math.random() * 0xFFFFFF << 0).toString(16);

            return `chip-${randomId}`;
        }

        constructor(containerElement) {
            this._containerElement = containerElement;
            this._fakeInput = this._containerElement.querySelector('[js-fake-file-input]');
            this._realInput = this._containerElement.querySelector('[js-real-file-input]');
            this._chipContainer = this._containerElement.querySelector('[js-chip-container]');
            this._noFile = this._containerElement.querySelector('[js-no-file]');
            this._removeFilesButton = this._containerElement.querySelector('[js-remove-files]');

            this._files = [];

            this._addEventListeners();
        }

        _addEventListeners = () => {
            this._fakeInput.addEventListener('click', this._handleFakeInputClick, false);
            this._realInput.addEventListener('change', this._handleRealInputChange, false);
            this._removeFilesButton.addEventListener('click', this._handleRemoveFilesButtonClick, false);
        }

        _handleFakeInputClick = () => {
            if (this._chipContainer.querySelectorAll('.chip').length > 0) {
                this._removeChips();
            }

            this._realInput.click();
        }

        _handleRealInputChange = (e) => {
            if (this._realInput.files.length > 0) {
                this._toggleNoFile();
                [...this._realInput.files].forEach(file => {
                    const name = file.name;
                    const id = FileManager.generateId();
                    const chipTemplate = FileManager.chipTemplate(name, id);

                    this._chipContainer.insertAdjacentHTML('beforeend', chipTemplate);

                    const chip = this._chipContainer.querySelector(`#${id}`);

                    const filesObj = { name, id, chip };

                    this._files.push(filesObj);
                })
            }
        }

        _handleRemoveFilesButtonClick = (e) => {
            if (this._realInput.files.length) {
                this._removeChips();
            }
        }

        _removeChips = () => {
            const chips = [...this._chipContainer.querySelectorAll('.chip')];
            this._toggleNoFile();
            this._files = [];
            this._chipContainer.innerHTML = '';
            this._realInput.value = '';
        }

        _toggleNoFile = () => {
            this._noFile.hidden = !this._noFile.hidden;
            this._removeFilesButton.hidden = !this._removeFilesButton.hidden;
        }
    }

    const fileManagerReference = new FileManager(fileManager);
}

window.addEventListener("load", function () {
  if (document.querySelector('.container-file')) {
    inputfile();
  }
});

/* ********************************************************************** */
/* ******************************Add field***************************** */
function addField() {
  var addButton = document.querySelector('.post__add');

  var newLabel = document.createElement('label');
  newLabel.className = 'post__box';

  var newSpan = document.createElement('span');
  newSpan.className = 'title';
  newSpan.textContent = 'Доп. поле ';

  var newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = '';
  newInput.id = '';

  newLabel.appendChild(newSpan);
  newLabel.appendChild(newInput);

  addButton.addEventListener('click', function () {
    addButton.parentNode.insertBefore(newLabel.cloneNode(true), addButton.nextSibling);
  });
}
window.addEventListener("load", function () {
  if (document.querySelector('.post-form')) {
    addField();
  }
});
/* ********************************************************************** */
/* ******************************Clear form****************************** */
var clearButton = document.querySelector('.filter__clear');

window.addEventListener("load", function () {
  if (clearButton) {
    clearButton.addEventListener('click', function() {
      var inputElements = document.querySelectorAll('.filter__form input[type="checkbox"]');
      var selectElements = document.querySelectorAll('.filter__form select');
  
      inputElements.forEach(function(input) {
          input.checked = false;
      });
  
      selectElements.forEach(function(select) {
          select.selectedIndex = -1;
          iSelect.destroy();
      });
    });
  }
});


document.querySelectorAll(".has-dropdown a i").forEach((e) => {
  e.addEventListener('click', function (i) {
      i.preventDefault();

      e.parentElement.classList.toggle("active");
      let panel = e.parentElement.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
})

function closeCollapsible() {
  eCollapsible.forEach(collapsible => {
    const instance = M.Collapsible.getInstance(collapsible);
    if (instance && instance.isOpen) {
      instance.close();
    }
  });
}
// Get all the list items inside the dropdown
const dropdownItems = document.querySelectorAll(".dropdown li");

// Add click event listener to each list item
dropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    setTimeout(closeCollapsible, 50);
    // Get the text content of the clicked item
    const value = item.textContent.trim();

    // Get the element with the class filter-drop__current
    const filterDropCurrent = document.querySelector(".filter-drop__current");

    // Set the text content of the element with the selected value
    filterDropCurrent.innerHTML = `${value} <i class="material-icons">keyboard_arrow_down</i>`;
  });
});