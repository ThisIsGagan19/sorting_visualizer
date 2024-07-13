// Insertion Sort Function
async function insertion() {
    // console.log('insertion sorting');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#16FF00';

    for(let i = 1; i < ele.length; i++){
        // console.log(`${i}th loop`);
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = '#0075ff';

        await animationWait(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            // console.log(`${j}th loop`);
            ele[j].style.background = '#0075ff';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            // Wait for Swapping Animation
            await animationWait(delay);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#16FF00';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = '#16FF00';
    }
}

const insertionSortbtn = document.querySelector(".insertion-sort");

// Insertion Sort Button Functionality
insertionSortbtn.addEventListener('click', async function(){

    // Disable all other Buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    // Do Insertion Sort
    await insertion();

    // Enable all other Buttons
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});