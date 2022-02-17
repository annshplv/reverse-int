module.exports = function reverse (n) {
    let a = Math.abs(n);
    let b = a.toString().split("").reverse().join("");
    return +b;
}
