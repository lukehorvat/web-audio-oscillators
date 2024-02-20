// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const imag = Array.from({ length: 8192 }, (_, n) => (n === 1 ? 1 : 0));

export const real = imag.map(() => 0);
