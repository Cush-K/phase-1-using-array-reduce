const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const init = 0;
const totalBatteries = batteryBatches.reduce((foo, value) =>
    foo + value, init);
console.log(totalBatteries);