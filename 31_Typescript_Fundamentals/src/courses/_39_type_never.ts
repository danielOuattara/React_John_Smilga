export {};

/**
 * In TypeScript, `never` is a type that represents
 * the type of values that never occur.
 *
 * You cannot assign any value to a variable of type never.
 *
 * TypeScript will give a compile error if there are any
 * unhandled cases, helping ensure that all cases are handled.
 */

// let someValue: never = 0; // X : incorrect
/**Type 'number' is not assignable to type 'never'.ts(2322)*/

// acceptable
let neverValue: never;

//----

type Theme = "light" | "dark";

function checkTheme(theme: Theme) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }

  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  /**
   * theme below is of type `never`, because it can never
   * have a value that is not 'light' or 'dark'.
   */
  console.log(theme); // type = `never`
}

checkTheme("light");
checkTheme("dark");

//------------------------------------

enum EnumColor {
  Red,
  Blue,
  // Green,
}

function getColorName(color: EnumColor) {
  switch (color) {
    case EnumColor.Red:
      return "Red";
    case EnumColor.Blue:
      return "Blue";
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(EnumColor.Red)); // Red
console.log(getColorName(EnumColor.Blue)); // Blue
// console.log(getColorName(EnumColor.Green)); // Green
