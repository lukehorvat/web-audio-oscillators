// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const imag = Array.from({ length: 8192 }, (_, n) => (
  n === 0 ?
  0 :
  Math.pow(-1, n + 1) * (2 / (n * Math.PI))
));

export const real = imag.map(() => 0);
