// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const real = Float32Array.from({ length: 8192 }, () => 0);

export const imag = Float32Array.from(real, (_, n) => (
  n === 0 ?
  0 :
  (2 / (n * Math.PI)) * (1 - Math.pow(-1, n))
));
