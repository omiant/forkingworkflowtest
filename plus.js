function plus (a, b) {
    let i1 = +a;
    let i2 = +b;
    if (isNaN(i1) || isNaN(i2)) throw Error("Invalid input.");
    return i1 + i2;
}
