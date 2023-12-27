function main(n) {
    return n?.toString() === n?.toString().split('').reverse().join('');
}