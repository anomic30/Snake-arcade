function getRandom() {
    let min = 0;
    let max = 96;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
    return [x, y];
}

export default getRandom