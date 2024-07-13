// Selection Sort Function
async function selection() {
    // console.log("selection sorting");
    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length; i++) {
        // console.log(`${i}th loop`);
        let minIndex = i;

        ele[i].style.background = '#f68104';

        for(let j = i + 1; j < ele.length; j++) {
            // console.log(`${j}th loop`);
            ele[j].style.background = '#0075ff';

            await animationWait(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[minIndex].style.height)) {
                if(minIndex !== i) {
                    ele[minIndex].style.background = 'rgb(146, 255, 255)';
                }
                minIndex = j;
            } else {
                ele[j].style.background = 'rgb(146, 255, 255)';
            }
        }
        
        // Wait for Swapping Animation
        await animationWait(delay);
        swap(ele[minIndex], ele[i]);

        ele[minIndex].style.background = 'rgb(146, 255, 255)';
        ele[i].style.background = '#16FF00';
    }
}


const selectionSortBtn = document.querySelector(".selection-sort");

// Selection Sort Button Functionality
selectionSortBtn.addEventListener("click", async function() {

    // Disable all other Buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    // Do Selection Sort
    await selection();

    // Enable all other Buttons
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});