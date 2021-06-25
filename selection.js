let vec = [];
let bubble = document.querySelector('.bubble');
let timeout = 500;
let n = 6;
let flag = 0;
function Reset() {
    window.location.reload();
}
function GenerateArray() {
    if (flag >= 1)
        return;
    flag = 1;
    let NewArray = document.createElement('div');
    NewArray.setAttribute('id', 0);
    NewArray.setAttribute('class', 'NewArr');
    bubble.append(NewArray);
    for (let i = 0; i < n; i++) {
        let val = Math.floor(Math.random() * 101);
        vec.push(val);
        let element = document.createElement('li');
        element.setAttribute('id', i + 1);
        element.setAttribute('class', 'arr');
        element.innerHTML = val;
        NewArray.append(element);
        console.log(val);
    }
}
async function SelectionSortArray() {
    if (flag > 1)
        return;
    flag = 2;
    for (let i = 0; i < n; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            let ele1 = document.getElementById((n * i) + (j + 1));
            let ele2 = document.getElementById((n * i) + (min_idx + 1));
            ele1.style.backgroundColor = "red";
            ele2.style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
            if (vec[j] < vec[min_idx]) {
                min_idx = j;
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
            ele1.style.backgroundColor = "rgb(68, 160, 141)";
            ele2.style.backgroundColor = "rgb(68, 160, 141)";
        }
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, timeout)
        );
        let ele1 = document.getElementById((n * i) + (i + 1));
        let ele2 = document.getElementById((n * i) + (min_idx + 1));
        let temp = vec[i];
        vec[i] = vec[min_idx];
        vec[min_idx] = temp;
        ele1.innerHTML = vec[i];
        ele2.innerHTML = vec[min_idx];
        for (let j = 0; j < i; j++)
            document.getElementById((n * i + j + 1)).style.backgroundColor = "rgb(235, 7, 219)";


        let NewArray = document.createElement('div');
        NewArray.setAttribute('id', -(i + 1));
        NewArray.setAttribute('class', 'NewArr');
        bubble.append(NewArray);
        for (let j = 0; j < n; j++) {
            let val = vec[j];
            let element = document.createElement('li');
            element.setAttribute('id', (n * (i + 1)) + (j + 1));
            element.setAttribute('class', 'arr');
            element.innerHTML = val;
            NewArray.append(element);
        }
    }
}