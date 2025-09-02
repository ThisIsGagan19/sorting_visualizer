// Intro Sort (Quick + Heap fallback). Uses insertion for small partitions.
async function introUtil(ele, start, end, depthLimit) {
    if (start >= end) return;

    // use insertion for small ranges
    if (end - start + 1 <= 16) {
        for (let i = start + 1; i <= end; i++) {
            let key = parseInt(ele[i].style.height);
            let j = i - 1;
            while (j >= start && parseInt(ele[j].style.height) > key) {
                ele[j + 1].style.background = "#0075ff";
                await animationWait(delay);
                ele[j + 1].style.height = ele[j].style.height;
                ele[j + 1].style.background = "rgb(146, 255, 255)";
                j--;
            }
            ele[j + 1].style.background = "#0075ff";
            await animationWait(delay);
            ele[j + 1].style.height = `${key}px`;
            ele[j + 1].style.background = "rgb(146, 255, 255)";
        }
        return;
    }

    if (depthLimit === 0) {
        // fallback to heap sort (this will sort whole array)
        // heap() should be defined in heap.js and loaded earlier
        if (typeof heap === "function") {
            await heap();
        }
        return;
    }

    // partition (Lomuto) using element heights
    let pivotHeight = parseInt(ele[end].style.height);
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
        ele[j].style.background = "#0075ff";
        ele[end].style.background = "#0075ff";
        await animationWait(delay);

        if (parseInt(ele[j].style.height) <= pivotHeight) {
            i++;
            swap(ele[i], ele[j]);
        }

        ele[j].style.background = "rgb(146, 255, 255)";
        ele[end].style.background = "rgb(146, 255, 255)";
    }

    await animationWait(delay);
    swap(ele[i + 1], ele[end]);

    // recursive calls
    await introUtil(ele, start, i, depthLimit - 1);
    await introUtil(ele, i + 2, end, depthLimit - 1);
}

async function intro() {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;
    if (n === 0) return;
    let depthLimit = 2 * Math.floor(Math.log2(n));
    await introUtil(ele, 0, n - 1, depthLimit);

    // mark sorted
    for (let i = 0; i < n; i++) ele[i].style.background = "#16FF00";
}

// Button wiring
const introSortBtn = document.querySelector(".intro-sort");
if (introSortBtn) {
    introSortBtn.addEventListener("click", async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        await intro();

        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
}
