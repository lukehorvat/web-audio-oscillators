// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const imag = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : (2 / (n * Math.PI)) * (1 - Math.pow(-1, n))
);

export const real = imag.map(() => 0);
