import { WaveTable } from './wave-table';

// Source: https://github.com/chipbell4/nes-sequencer

const real = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : (4 / (n * Math.PI)) * Math.sin(Math.PI * n * 0.18)
);

const imag = real.map(() => 0);

export const chiptune: WaveTable = { real, imag };
