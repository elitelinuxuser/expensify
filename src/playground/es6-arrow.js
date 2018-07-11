const square = function(x){
    return x*x;
};

const squareArrow = (y) => {
    return y*y;
};

const getFirstName = (name) => name.split(' ')[0];

console.log(squareArrow(8));

const getName = getFirstName('Mike Don');
console.log(getName);