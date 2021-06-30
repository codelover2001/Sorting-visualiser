let vec = [];
let bubble = document.querySelector('.bubble');
let timeout = 400;
let n = 8;
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
    }
}
async function SelectionSortArray() {
    if (flag != 1)
        return;
    flag = 2;

    for (let i = 0; i < n; i++) {
        window.scrollBy(0, 2000);


        for (let j = 0; j <= i; j++)
            document.getElementById((n * i + j + 1)).style.backgroundColor = "rgb(235, 7, 219)";
        for (let j = i + 1; j < n; j++)
            document.getElementById((n * i + j + 1)).style.backgroundColor = "rgb(68, 160, 141)";



        let min_idx = i;
        let ele2 = document.getElementById((n * i) + (min_idx + 1));
        ele2.style.backgroundColor = "#ffff00";
        for (let j = i + 1; j < n; j++) {
            let ele1 = document.getElementById((n * i) + (j + 1));
            ele1.style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
            if (vec[j] < vec[min_idx]) {
                min_idx = j;
                ele2.style.backgroundColor = "rgb(68, 160, 141)";
                ele2 = document.getElementById((n * i) + (min_idx + 1));
                ele2.style.backgroundColor = "#ffff00";
            }
            else
                ele1.style.backgroundColor = "rgb(68, 160, 141)";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
        }
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, timeout)
        );
        let ele1 = document.getElementById((n * i) + (i + 1));
        let temp = vec[i];
        vec[i] = vec[min_idx];
        vec[min_idx] = temp;
        ele1.innerHTML = vec[i];
        ele2.innerHTML = vec[min_idx];
        ele2.style.backgroundColor = "rgb(68, 160, 141)";
        ele1.style.backgroundColor = "rgb(235, 7, 219)";

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
