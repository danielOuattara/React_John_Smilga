export {};

/* ------- interface challenge ------- */

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(cap: number): number;
  upgradeRam(cap: number, cap2: number): number;
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8, // in GB
  upgradeRam(amount: number, corrector?: number): number {
    if (corrector !== undefined) {
      this.ram += amount;
      this.ram -= corrector;
    } else {
      this.ram += amount;
    }
    return this.ram;
  },
};

console.log(laptop);

laptop.upgradeRam(4);
console.log(laptop);

laptop.upgradeRam(4, 2);
console.log(laptop);
