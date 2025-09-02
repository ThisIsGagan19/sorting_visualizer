// Counting Sort Function
async function counting() {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;

    // Read heights as numbers
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(parseInt(ele[i].style.height));

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let range = max - min + 1;

    let count = new Array(range).fill(0);
    for (let i = 0; i < n; i++) count[arr[i] - min]++;

    for (let i = 1; i < count.length; i++) count[i] += count[i - 1];

    let output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    // Animate writing sorted values back to bars
    for (let i = 0; i < n; i++) {
        ele[i].style.background = "#0075ff";
        await animationWait(delay);
        ele[i].style.height = `${output[i]}px`;
        ele[i].style.background = "rgb(146, 255, 255)";
    }

    // Mark sorted
    for (let i = 0; i < n; i++) ele[i].style.background = "#16FF00";
}

// Button wiring (safe-guard if button missing)
const countingSortBtn = document.querySelector(".counting-sort");
if (countingSortBtn) {
    countingSortBtn.addEventListener("click", async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        await counting();

        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
}
