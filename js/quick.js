// Partition Function of Quick Sort for finding the Pivot Index
async function partition(ele, l, r){
    // console.log('Inside partition()');
    let i = l - 1;
    ele[r].style.background = 'red';

    for(let j = l; j <= r - 1; j++) {
        // console.log('Inside partition for j');
        ele[j].style.background = '#0075ff';

        await animationWait(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            // console.log('Inside IF of partition for j');
            i++;
            await animationWait(delay);
            swap(ele[i], ele[j]);

            ele[i].style.background = '#f68104';
            if(i != j) ele[j].style.background = '#FF78F0';

            await animationWait(delay);
        }
        else{
            ele[j].style.background = '#FF78F0';
        }
    }
    i++; 

    await animationWait(delay);
    swap(ele[i], ele[r]); 
    // console.log(`i = ${i}`, typeof(i));

    ele[r].style.background = '#FF78F0';
    ele[i].style.background = "rgb(22, 255, 0)";

    await animationWait(delay);
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != "rgb(22, 255, 0)")
            ele[k].style.background = 'rgb(146, 255, 255)';
    }

    return i;
}

// Quick Sort Function
async function quick(ele, l, r){
    // console.log('quick sorting', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivotIndex = await partition(ele, l, r);
        await quick(ele, l, pivotIndex - 1);
        await quick(ele, pivotIndex + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = "rgb(22, 255, 0)";
            ele[l].style.background = "rgb(22, 255, 0)";
        }
    }
}


const quickSortBtn = document.querySelector(".quick-sort");

// Quick Sort Button Functionality
quickSortBtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');

    // Intializing left and right i.e. range
    let l = 0;
    let r = ele.length - 1;

    // Disable all other Buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    // Do Quick Sort
    await quick(ele, l, r);

    // Enable all other Buttons
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});