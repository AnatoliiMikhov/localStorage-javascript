'use strict';

// localStorage.setItem("number", 1); // добавить key value в localStorage

// console.log(localStorage.getItem("number")); // show value

// localStorage.removeItem("number"); // remove item

// localStorage.clear(); // clear all localStorage

window.addEventListener("DOMContentLoaded", function() {

    const checkbox = document.querySelector('.checkbox');

    if (localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    } else {
        localStorage.removeItem("isChecked");
    }

    checkbox.addEventListener("click", function() {
        localStorage.setItem("isChecked", checkbox.checked);
    });

    // change form
    const change = document.querySelector('.change-form'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = '#FF4766';
    }

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#FF4766';
    });


    // Person object

    let person = {
        name: "Alex",
        age: 27,
        tech: ['mobile', 'notebook']
    };

    let serializedPerson = JSON.stringify(person); // преобразовываем в JSON obj
    localStorage.setItem("Alex", serializedPerson);

    console.log(JSON.parse(localStorage.getItem("Alex")));

});