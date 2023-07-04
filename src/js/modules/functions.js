// Проверка поддержки webp, класса _webp или _no-webp для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";    
    }

    // Добавление класса _webp или _no-webp для HTML
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })

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