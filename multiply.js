function minus (a, b) {
    let i1 = +a;
    let i2 = +b;
    if (isNaN(i1) || isNaN(i2)) throw Error("Invalid input. Input must contain only numbers!!!!11!1!11");
    return i1 * i2;
}