import { WaveTable } from './wave-table';

// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

const imag = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : (2 / (n * Math.PI)) * (1 - Math.pow(-1, n))
);

const real = imag.map(() => 0);

export const square: WaveTable = { real, imag };
