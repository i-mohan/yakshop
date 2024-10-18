export class Yak {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age * 100; // Convert yak years to days
    this.sex = sex;
    this.ageLastShaved = this.age; // Initially, all yaks are shaven
  }

  // Produce milk based on the age of the yak (only females produce milk)
  produceMilk() {
    return this.sex === "f" ? 50 - this.age * 0.03 : 0;
  }

  // Calculate when the yak can be shaved next
  daysUntilNextShave() {
    return 8 + this.age * 0.01;
  }

  // Check if the yak is alive (a yak dies at 10 years = 1000 days)
  isAlive() {
    return this.age < 1000;
  }

  // Check if the yak can be shaved after T days
  canBeShaved(T) {
    if (this.age < 100) return false; // Yak must be at least 1 year (100 days) old to be shaved
    const daysSinceLastShave = this.ageLastShaved - T;
    return daysSinceLastShave >= this.daysUntilNextShave();
  }

  // Shave the yak and update the last shaved day
  shave() {
    this.ageLastShaved = this.age;
  }

  // Update the age of the yak after T days
  updateAge(T) {
    this.age += T;
  }
}
