// Source: https://www.sitepoint.com/using-fourier-transforms-web-audio-api/#synthesizing-a-horn

export const real = Float32Array.from([
  0,
  0.4,
  0.4,
  1,
  1,
  1,
  0.3,
  0.7,
  0.6,
  0.5,
  0.9,
  0.8,
]);

export const imag = Float32Array.from(real, () => 0);
