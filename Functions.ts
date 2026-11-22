function addnumbers(a: number, b: number) {
    let sum = a + b;
    console.log("Sum of " + a + " and " + b + " is: " + sum);
}
function checker(num: number) {
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }
}

function simpleInterest(principal: number, rate: number, time: number) {
    let interest = (principal * rate * time) / 100;
    console.log("Simple Interest is: " + interest);
}

function greet() {

    let name: string = "Student";
    console.log("Greetings, " + name + "!");

}
const largerNumber = (x: number, y: number): number => {
    return x > y ? x : y;
};

//calling the functions
addnumbers(5, 10);
checker(7);
simpleInterest(1000, 5, 2);
greet();
console.log("The larger number is: " + largerNumber(150, 20));


