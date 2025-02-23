function solve(radius) {
    if (typeof radius != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
        return;
    }

    let area = Math.PI * radius * radius;
    console.log(area.toFixed(2));
}

solve(5);
solve('name');
