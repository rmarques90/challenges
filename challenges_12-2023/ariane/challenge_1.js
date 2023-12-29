function main(n) {
    const conversionObj = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    return n?.split('').reduce((sum, val, i, array) => {
        return array[i + 1] && conversionObj[val] < conversionObj[array[i + 1]] ? sum - conversionObj[val] : sum + conversionObj[val]
    }, 0);
}