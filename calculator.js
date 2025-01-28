export function add(numbers) {  
    if (numbers === '') {
        return 0;
    }
    //splitting by comma and new line
    const numArr = numbers.split(/,|\n/);
    return numArr.reduce((sum, num) => sum + parseInt(num, 10), 0);
}