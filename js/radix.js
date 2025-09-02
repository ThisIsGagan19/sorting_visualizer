// Counting sort used by Radix (for a given digit 'exp')
async function countingSortForRadix(exp) {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(parseInt(ele[i].style.height));

    let output = new Array(n);
    let count = new Array(10).fill(0);

    // count occurrences of digits
    for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;

    // prefix sums
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    // build output (stable)
    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // write back with animation
    for (let i = 0; i < n; i++) {
        ele[i].style.background = "#0075ff";
        await animationWait(delay);
        ele[i].style.height = `${output[i]}px`;
        ele[i].style.background = "rgb(146, 255, 255)";
    }
}

async function radix() {
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;
    if (n === 0) return;

    // get max among heights
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(parseInt(ele[i].style.height));
    let max = Math.max(...arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSortForRadix(exp);
    }

    // mark sorted
    for (let i = 0; i < n; i++) ele[i].style.background = "#16FF00";
}

// Button wiring
const radixSortBtn = document.querySelector(".radix-sort");
if (radixSortBtn) {
    radixSortBtn.addEventListener("click", async function() {
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();

        await radix();

        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    });
}
