export function add(numbers) {  
    if (numbers === '') {
        return 0;
    }

    //handle custom delimiters
    if (numbers.startsWith('//')) {
       const delimiter = numbers[2];
       numbers = numbers.slice(4);
       return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num, 10), 0);
    } 

    //splitting by comma and new line
    const numArr = numbers.split(/,|\n/);

    //negative number handling
    numArr.forEach(num => {
        if (num < 0) {
            throw new Error(`negative numbers not allowed ${num}`);
        }
    })

    return numArr.reduce((sum, num) => sum + parseInt(num, 10), 0);
}