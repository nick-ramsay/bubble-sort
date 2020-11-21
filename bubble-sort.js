const bubbleSort = (randomNumberArray) => {
    let arrayLength = randomNumberArray.length;
    let sortingComplete = false;

    let firstNumber;
    let secondNumber;

    while (!sortingComplete) {
        sortingComplete = true;
        for (let i = 0; i < arrayLength; i++) {
            firstNumber = randomNumberArray[i];
            secondNumber = randomNumberArray[i + 1];
            if (firstNumber > secondNumber) {
                randomNumberArray[i] = secondNumber;
                randomNumberArray[i + 1] = firstNumber
                sortingComplete = false;
                //console.log(randomNumberArray);
            }
        }
    }
    return randomNumberArray;
}

let randomNumberArray = [25, 7, 88, 2, 7, 8, 300, 100, 252, 56, 14, 1, 456, 989, 37];
bubbleSort(randomNumberArray);
console.log(randomNumberArray);