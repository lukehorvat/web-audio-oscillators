import { WaveTable } from './wave-table';

// Source: https://www.sitepoint.com/using-fourier-transforms-web-audio-api/#synthesizing-a-horn

const real = [0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8];

const imag = real.map(() => 0);

export const brass: WaveTable = { real, imag };
