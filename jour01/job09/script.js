function tri(numbers, order) {
    for (let i in numbers) {
        for (let y in numbers) {
            if ((order === "desc"  && numbers[y] < numbers   [i]) || (order === "asc" && numbers[y] > numbers[i])) {
                let tmp = numbers[i];
                numbers[i] = numbers[y];
                numbers[y] = tmp;
            }
        }
    }
    return numbers;
}

tab = [5,8,1,7,9,3,2];
console.log(tri(tab, "desc"));