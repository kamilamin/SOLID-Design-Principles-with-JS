class CaloriesCalculator {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    calculateCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if(this.currentCalories > this.maxCalories) {
            this.logCaloriesResult();
        }
    }
    logCaloriesResult() {
        console.log('Max calories exceeded');
    }
}

const caloriesCalculate = new CaloriesCalculator(2000);
caloriesCalculate.calculateCalories(500);
caloriesCalculate.calculateCalories(1000);
caloriesCalculate.calculateCalories(700);
