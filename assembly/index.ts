// The entry file of your WebAssembly module.
declare function log(a: i32, b:i32): void

export function add(a: i32, b: i32): i32 {

  // if (a === 44) {
  //   abort()
  // }

  log(a, b)
  
  return a + b;
}
// webassembly returns the pointer to the location of the string in memory
// fizzbuzz(3) returns 1104
export function fizzbuzz(num: i32): String | null {
  if (num % 15 === 0) {
    return "fizzbuzz"
  }
  if (num % 3 === 0) {
    return "fizz"
  }

  if (num % 5 === 0) {
    return "buzz"
  }

  return null

} 