const inventory = {
    Laptop: 12,
    Mouse: 3,
    Keyboard: 7,
    Headphones: 2,
    Webcam: 9
};

const minimumStock = 5;

for (const [item, quantity] of Object.entries(inventory)) {
    if (quantity < minimumStock) {
        console.log(`⚠️ Low Stock: ${item} (${quantity} left)`);
    } else {
        console.log(`✅ ${item}: ${quantity} available`);
    }
}
