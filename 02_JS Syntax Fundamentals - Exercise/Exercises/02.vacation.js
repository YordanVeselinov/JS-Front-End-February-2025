function vacation(groupSize, type, day) {
    let prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.80,
            Sunday: 10.46
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50
        }
    };

    let totalPrice = prices[type][day] * groupSize;

    if (type === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85; 
    } else if (type === 'Business' && groupSize >= 100) {
        totalPrice = prices[type][day] * (groupSize - 10);
    } else if (type === 'Regular' && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;     
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
