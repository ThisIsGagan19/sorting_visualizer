// Bubble Sort Function
async function bubble() { 
    // console.log("bubble sorting");
    const ele = document.querySelectorAll(".bar");
    
    for(let i = 0; i < ele.length - 1; i++) {
        // console.log(`${i}th loop running`);

        for(let j = 0; j < ele.length - i - 1; j++) {
            // console.log(`${j}th loop running`);
            
            ele[j].style.background = "#0075ff";
            ele[j + 1].style.background = "#0075ff";

            if(parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {

                // Wait for Swapping Animation
                await animationWait(delay);
                swap(ele[j], ele[j + 1]);
            }

            ele[j].style.background = "rgb(146, 255, 255)";
            ele[j + 1].style.background = "rgb(146, 255, 255)";
        }

        ele[ele.length - 1 - i].style.background = "#16FF00";
    }

    ele[0].style.background = "#16FF00";
}

const bubbleSortBtn = document.querySelector(".bubble-sort");

// Bubble Sort Button Functionality
bubbleSortBtn.addEventListener("click", async function() {
    
    // Disable all other Buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    // Do Bubble Sort 
    await bubble();

    // Enalble all other Button
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});