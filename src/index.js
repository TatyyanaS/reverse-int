module.exports = function reverse (n) {
    let a = Math.abs(n).toString().split('');
    if(a[a.length-1] == '0') {
        a.splice(a.length-1, 1);
    }
    a.reverse().toString();
    return Number(a.join(''));
};
