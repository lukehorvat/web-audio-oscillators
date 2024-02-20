// Source: https://github.com/chipbell4/nes-sequencer

export const real = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : (4 / (n * Math.PI)) * Math.sin(Math.PI * n * 0.18)
);

export const imag = real.map(() => 0);
