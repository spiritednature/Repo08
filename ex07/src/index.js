var sum = 0;

function addThree() {
    sum = sum + 3;
    console.log("Three");

}

function addFive() {
    sum = sum + 5;
    console.log("Five");
}

addThree();
addFive();

module.exports = {
    addThree,
    addFive
};