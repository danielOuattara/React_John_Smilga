export {};

/*--- optional parameter ---*/

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); // Output: 80

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); // Output: 300

/* --- default parameter ---*/

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0,
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); // Output: 80

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); // Output: 300
