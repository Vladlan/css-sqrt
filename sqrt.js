function sqrt(x) {
  let i = 1
  let z = 1
  while (i < 7) {
    z -= (z * z - x) / (2 * z)
    i = i + 1
  }
  return z
}

function sqrtWithoutLoop(x) {
  let z = 1
  z2 = z - (z * z - x) / (2 * z)
  z3 = z2 - (z2 * z2 - x) / (2 * z2)
  z4 = z3 - (z3 * z3 - x) / (2 * z3)
  z5 = z4 - (z4 * z4 - x) / (2 * z4)
  return z5
}

const sqrtWithoutLoopInScss = `
@function sqrtWithoutLoop($x) {
  $z: 1;
  $z2: $z - ($z * $z - $x) / (2 * $z);
  $z3: $z2 - ($z2 * $z2 - $x) / (2 * $z2);
  $z4: $z3 - ($z3 * $z3 - $x) / (2 * $z3);
  $z5: $z4 - ($z4 * $z4 - $x) / (2 * $z4);
  @return $z5;
}`

const sqrtWithoutLoopInCss = `
--z1: 1;
--z2: calc(var(--z1) - (var(--z1) * var(--z1) - var(--x)) / (2 * var(--z1)));
--z3: calc(var(--z2) - (var(--z2) * var(--z2) - var(--x)) / (2 * var(--z2)));
--z4: calc(var(--z3) - (var(--z3) * var(--z3) - var(--x)) / (2 * var(--z3)));
--z5: calc(var(--z4) - (var(--z4) * var(--z4) - var(--x)) / (2 * var(--z4)));
`

console.log(sqrt(9))
console.log(sqrtWithoutLoop(9))
