// Source: https://github.com/chipbell4/nes-sequencer

export const real = Float32Array.from({ length: 8192 }, (_, n) => (
  n === 0 ?
  0 :
  4 / (n * Math.PI) * Math.sin(Math.PI * n * 0.18)
));

export const imag = Float32Array.from(real, () => 0);
