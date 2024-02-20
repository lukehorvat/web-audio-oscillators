// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const imag = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : (8 * Math.sin((n * Math.PI) / 2)) / Math.pow(Math.PI * n, 2)
);

export const real = imag.map(() => 0);
