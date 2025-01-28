export function add(numbers) {  
    if (numbers === '') {
        return 0;
    }

    const negatives = [];

    //handle custom delimiters
    if (numbers.startsWith('//')) {
        const delimiter = numbers[2];
        numbers = numbers.slice(4);
        const numArr = numbers.split(delimiter);
        
        //negative numbers handling
        numArr.forEach(num => {
            if(parseInt(num, 10) < 0) {
                negatives.push(num);
            }
        });

        if(negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
        }

        return numArr.reduce((sum, num) => sum + parseInt(num, 10), 0);
    } 

    //splitting by comma and new line
    const numArr = numbers.split(/,|\n/);

    //negative numbers handling
    numArr.forEach(num => {
        if(parseInt(num, 10) < 0) {
            negatives.push(num);
        }
    });

    if(negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numArr.reduce((sum, num) => sum + parseInt(num, 10), 0);
}