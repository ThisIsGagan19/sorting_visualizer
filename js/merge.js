// Merge Function of Merge Sort for Merging Two Sorted Arrays
async function mergeFun(ele, low, mid, high) {
    // console.log('merge sorting');
    // console.log(`low=${low}, mid=${mid}, high=${high}`);

    const n1 = mid - low + 1;
    const n2 = high - mid;
    // console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++) {
        await animationWait(delay);
        // console.log('In merge left loop');
        // console.log(ele[low + i].style.height + ' at ' + (low+i));
        ele[low + i].style.background = '#f68104';
        left[i] = ele[low + i].style.height;
    }

    for(let i = 0; i < n2; i++){
        await animationWait(delay);
        // console.log('In merge right loop');
        // console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        ele[mid + 1 + i].style.background = '#FF78F0';
        right[i] = ele[mid + 1 + i].style.height;
    }

    await animationWait(delay);

    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await animationWait(delay);
        // console.log('In merge while loop');
        // console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            // console.log('In merge while loop if');
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'rgb(22, 255, 0)';
            }
            else{
                ele[k].style.background = 'rgb(22, 255, 0)';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;

        } else {
            // console.log('In merge while loop else');
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'rgb(22, 255, 0)';
            }
            else{
                ele[k].style.background = 'rgb(22, 255, 0)';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }

    // If First Array Left
    while(i < n1) {
        await animationWait(delay);
        // console.log("In while if n1 is left");
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'rgb(22, 255, 0)';
        }
        else{
            ele[k].style.background = 'rgb(22, 255, 0)';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }

    // If Second Array Left
    while(j < n2){
        await animationWait(delay);
        // console.log("In while if n2 is left");
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'rgb(22, 255, 0)';
        }
        else{
            ele[k].style.background = 'rgb(22, 255, 0)';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

// Merge Sort Function
async function merge(ele, l, r){
    // console.log('In mergeSort()');
    if(l >= r){
        // console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    // console.log(`left=${l} mid=${m} right=${r}`, typeof(m));

    await merge(ele, l, m);
    await merge(ele, m + 1, r);
    await mergeFun(ele, l, m, r);
}

const mergeSortBtn = document.querySelector(".merge-sort");

// Merge Sort Button Functionality
mergeSortBtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');

    // Intitalizing Range
    let l = 0;
    let r = parseInt(ele.length) - 1;

    // Disable all other Buttons
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    // Do Merge Sort
    await merge(ele, l, r);

    // Enable all other Buttons
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});