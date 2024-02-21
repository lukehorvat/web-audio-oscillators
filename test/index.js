import { customOscillatorTypes, customOscillators } from '../';
import Reverb from 'soundbank-reverb';
import QwertyHancock from 'qwerty-hancock';

const context = new AudioContext();
let oscillator;

const oscillatorTypeSelect = document.createElement('select');
oscillatorTypeSelect.id = 'oscillator-type-select';
customOscillatorTypes.forEach((oscillatorType) => {
  const option = document.createElement('option');
  option.value = option.text = oscillatorType;
  oscillatorTypeSelect.appendChild(option);
});
document.body.appendChild(oscillatorTypeSelect);

const keyboardDiv = document.createElement('div');
keyboardDiv.id = 'keyboard';
document.body.appendChild(keyboardDiv);

const keyboard = new QwertyHancock({
  id: keyboardDiv.id,
  octaves: 6,
  startNote: 'A1',
});
keyboard.keyDown = (note, frequency) => {
  oscillator = customOscillators[oscillatorTypeSelect.value](context);
  oscillator.frequency.value = frequency;

  const gain = context.createGain();
  gain.gain.value = 0.2; // TODO: Control this with an input[type=range].

  const reverb = Reverb(context);
  reverb.time = 1;
  reverb.wet.value = 0.8;
  reverb.dry.value = 0.6;

  oscillator.connect(gain).connect(reverb).connect(context.destination);
  oscillator.start();
};
keyboard.keyUp = (note, frequency) => {
  oscillator.stop();
};
