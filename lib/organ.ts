import { WaveTable } from './wave-table';

const imag = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1];

const real = imag.map(() => 0);

export const organ: WaveTable = { real, imag };
