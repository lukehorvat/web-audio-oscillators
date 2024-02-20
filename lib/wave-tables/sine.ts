import { WaveTable } from './wave-table';

// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

const imag = Array.from({ length: 8192 }, (_, n) => (n === 1 ? 1 : 0));

const real = imag.map(() => 0);

export const sine: WaveTable = { real, imag };
