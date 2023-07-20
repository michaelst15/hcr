const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 // 123 => 1+2+3+1+2+3+1+2+3 => 18 => 1+8 => 9
 console.log(findSum(1233));
