// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const real = Float32Array.from({ length: 8192 }, () => 0);

export const imag = Float32Array.from({ length } = real, (_, n) => n === 1 ? 1 : 0);
