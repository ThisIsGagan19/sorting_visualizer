// Heap Sort helpers
async function heapify(ele, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && parseInt(ele[l].style.height) > parseInt(ele[largest].style.height)) {
        largest = l;
    }
    if (r < n && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height)) {
        largest = r;
    }

    if (largest !== i) {
        // highlight
        ele[i].style.background = "#0075ff";
        ele[largest].style.background = "#0075ff";
        await animationWait(delay);
        swap(ele[i], ele[largest]);
        // reset color
        ele[i].style.background = "rgb(146, 255, 255)";
        ele[largest].style.background = "rgb(146, 255, 255)";

        await heapify(ele, n, largest);
    }
}

async function heap() {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;

    // Build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(ele, n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        ele[0].style.background = "#0075ff";
        ele[i].style.background = "#0075ff";
        await animationWait(delay);
        swap(ele[0], ele[i]);
        ele[i].style.background = "#16FF00"; // final position
        ele[0].style.background = "rgb(146, 255, 255)";
        await heapify(ele, i, 0);
    }

    if (n > 0) ele[0].style.background = "#16FF00";
}

// Button wiring
const heapSortBtn = document.querySelector(".heap-sort");
if (heapSortBtn) {
    heapSortBtn.addEventListener("click", async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        await heap();

        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
}
