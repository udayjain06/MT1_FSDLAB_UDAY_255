function secondLargest(...numbers){
    let uniqueNumbers=[...new Set(numbers)];
    uniqueNumbers.sort((a,b)=>b-a);
    if(uniqueNumbers.length<2){
        return "second largest number does not exist";
    }
    return uniqueNumbers[1];
}
console.log(secondLargest(10,20,30,40,50));