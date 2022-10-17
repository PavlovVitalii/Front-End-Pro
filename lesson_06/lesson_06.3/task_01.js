const arr = [false, "Человек", 1, 2, 3, 4, NaN, null, undefined, Infinity, "3"];
const arr2 = arr.filter((el) => typeof el === "number" && isFinite(el));
const arithmeticalMean = arr2.reduce((sum, el) => (sum + el)) / arr2.length;
console.log(arithmeticalMean);
