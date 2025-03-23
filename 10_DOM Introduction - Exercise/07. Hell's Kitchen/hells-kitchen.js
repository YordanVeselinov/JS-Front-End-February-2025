function solve() {
    let input = JSON.parse(document.querySelector('textarea').value);
    let restaurants = {};

    for (let line of input) {
        let [restaurant, workersData] = line.split(' - ');
        let workers = workersData.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
        });

        if (restaurants[restaurant]) {
            restaurants[restaurant].workers = restaurants[restaurant].workers.concat(workers);
        } else {
            restaurants[restaurant] = { workers };
        }

        restaurants[restaurant].avgSalary = restaurants[restaurant].workers.reduce((sum, worker) => sum + worker.salary, 0) / restaurants[restaurant].workers.length;
        restaurants[restaurant].bestSalary = Math.max(...restaurants[restaurant].workers.map(w => w.salary));
    }

    let bestRestaurant = Object.entries(restaurants)
        .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

    document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

    let workersString = bestRestaurant[1].workers
        .sort((a, b) => b.salary - a.salary)
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(' ');
    document.querySelector("#workers p").textContent = workersString;
}