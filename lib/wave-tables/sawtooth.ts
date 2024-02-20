import { WaveTable } from './wave-table';

// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

const imag = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : Math.pow(-1, n + 1) * (2 / (n * Math.PI))
);

const real = imag.map(() => 0);

export const sawtooth: WaveTable = { real, imag };
