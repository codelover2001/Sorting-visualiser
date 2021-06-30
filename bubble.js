let vec = [];
let arr = [];
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
async function BubbleSortArray() {
    if (flag != 1)
        return;
    flag = 2;
    for (let i = 0; i < n; i++)
        arr.push(vec[i]);
    arr.sort();

    for (let i = 0; i < n; i++) {
        window.scrollBy(0, 2000);
        let f = 0;
        for (let j = 0; j < n; j++) {
            if (vec[j] != arr[j]) {
                f = 1;
                break;
            }
        }
        if (f == 0)
            break;
        for (let j = 0; j < n - i - 1; j++) {
            let ele1 = document.getElementById((n * i) + (j + 1));
            let ele2 = document.getElementById((n * i) + (j + 2));
            ele1.style.backgroundColor = "red";
            ele2.style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
            if (vec[j] > vec[j + 1]) {
                let temp = vec[j];
                vec[j] = vec[j + 1];
                vec[j + 1] = temp;
                ele1.innerHTML = vec[j];
                ele2.innerHTML = vec[j + 1];
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, timeout)
            );
            ele1.style.backgroundColor = "rgb(235, 7, 219)";
            ele2.style.backgroundColor = "rgb(235, 7, 219)";
        }
        for (let j = n - i - 1; j < n; j++)
            document.getElementById((n * i + j + 1)).style.backgroundColor = "rgb(68, 160, 141)";
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
