const asyncOperation = (data) => {
    return new Promise(resolve =>
        setTimeout(() => resolve(data), 2000));
}

const arr = [1, 2, 3, 4, 5, 6];

// chạy lần lượt
async function task1() {
    for (let data of arr) {
        const index = await asyncOperation(data);
        console.log(index);
    }
}

// task1();

// chạy song song
async function task2() {
    const listOfPromises = arr.map(it => asyncOperation(it));
    for (let data of listOfPromises) {
        const index = await asyncOperation(data);
        console.log(index);
    }
}

task2();