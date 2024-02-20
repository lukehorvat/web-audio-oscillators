import { WaveTable } from './wave-table';

const real = [0, 0.8, 0.6, 0.6, 0.7, 0.6, 0, 0.8, 0.3, 1];

const imag = real.map(() => 0);

export const organ2: WaveTable = { real, imag };
