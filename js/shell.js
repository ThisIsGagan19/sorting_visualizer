// Shell Sort Function
async function shell() {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            // store current bar height (number)
            let tempHeight = parseInt(ele[i].style.height);
            let j = i;

            // shift elements that are greater than tempHeight
            while (j >= gap && parseInt(ele[j - gap].style.height) > tempHeight) {
                ele[j].style.background = "#0075ff";
                ele[j - gap].style.background = "#0075ff";
                await animationWait(delay);

                // move height down
                ele[j].style.height = ele[j - gap].style.height;

                ele[j].style.background = "rgb(146, 255, 255)";
                ele[j - gap].style.background = "rgb(146, 255, 255)";
                j -= gap;
            }
            // place tempHeight
            ele[j].style.background = "#0075ff";
            await animationWait(delay);
            ele[j].style.height = `${tempHeight}px`;
            ele[j].style.background = "rgb(146, 255, 255)";
        }
    }

    // mark sorted
    for (let k = 0; k < n; k++) {
        ele[k].style.background = "#16FF00";
        await animationWait(10);
    }
}

// Button wiring
const shellSortBtn = document.querySelector(".shell-sort");
if (shellSortBtn) {
    shellSortBtn.addEventListener("click", async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        await shell();

        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
}
