import { WaveTable } from './wave-table';

const real = [
  0, 1, 0.8144329896907216, 0.20618556701030927, 0.020618556701030927,
];

const imag = real.map(() => 0);

export const bass: WaveTable = { real, imag };
