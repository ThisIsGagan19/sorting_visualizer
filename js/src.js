// Disable Sorting Button Function
function disableSortingBtn() {
    document.querySelector(".bubble-sort").disabled = true;
    document.querySelector(".selection-sort").disabled = true;
    document.querySelector(".insertion-sort").disabled = true;
    document.querySelector(".quick-sort").disabled = true;
    document.querySelector(".merge-sort").disabled = true;

    document.querySelector(".counting-sort").disabled = true;
    document.querySelector(".heap-sort").disabled = true;
    document.querySelector(".shell-sort").disabled = true;
    document.querySelector(".radix-sort").disabled = true;
    document.querySelector(".intro-sort").disabled = true;
}

// Enable Sorting Button Function
function enableSortingBtn() {
    document.querySelector(".bubble-sort").disabled = false;
    document.querySelector(".selection-sort").disabled = false;
    document.querySelector(".insertion-sort").disabled = false;
    document.querySelector(".quick-sort").disabled = false;
    document.querySelector(".merge-sort").disabled = false;

    document.querySelector(".counting-sort").disabled = false;
    document.querySelector(".heap-sort").disabled = false;
    document.querySelector(".shell-sort").disabled = false;
    document.querySelector(".radix-sort").disabled = false;
    document.querySelector(".intro-sort").disabled = false;
}

// Disable Size Slider Function
function disableSizeSlider() {
    document.querySelector("#array-size").disabled = true;
}

// Enable Size Slider Function
function enableSizeSlider() {
    document.querySelector("#array-size").disabled = false;
}

// Disable New Array Button Function
function disableNewArrayBtn() {
    document.querySelector(".new-array-btn").disabled = true;
}

// Enable New Array Button Function
function enableNewArrayBtn() {
    document.querySelector(".new-array-btn").disabled = false;
}

// Function for Waiting Time of Swapping Animations
function animationWait(millisec) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, millisec);
    });
}

// Function to swap elements i.e. bars
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Function to Delete Bars of Array
function deleteChild() {
    const bars = document.querySelector("#bars");
    bars.innerHTML = "";
}

// Array to store elements i.e. Bar Heights
let array = [];

// Function to Create New Array
function createNewArray(noOfBars = 75) {
    deleteChild();

    array = [];
    for(let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 210) + 1);
    }

    const bars = document.querySelector("#bars");

    for(let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        
        bars.appendChild(bar);
    }
}

// Creating New Array initially on loading of site
createNewArray();

let arraySize = document.querySelector("#array-size");

// Creating New Array using Slider
arraySize.addEventListener('input', function() {
    createNewArray(parseInt(arraySize.value));
});

// Default Delay for 260ms
let delay = 260;
let delayElement = document.querySelector("#sorting-speed");

// Adjusting Sorting Speed
delayElement.addEventListener('input', function() {
    delay = 320 - parseInt(delayElement.value);
});

const newArray = document.querySelector(".new-array-btn");

// Creating New Array with New Array Button
newArray.addEventListener('click', function() {
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
