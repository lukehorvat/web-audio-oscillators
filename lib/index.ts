import * as sine from './sine';
import * as square from './square';
import * as sawtooth from './sawtooth';
import * as triangle from './triangle';
import * as chiptune from './chiptune';
import * as organ from './organ';
import * as organ2 from './organ2';
import * as bass from './bass';
import * as brass from './brass';
import { DroppedSquare as square2 } from '@mohayonao/wave-tables';
import { WarmTriangle as triangle2 } from '@mohayonao/wave-tables';
import { Organ2 as organ3 } from '@mohayonao/wave-tables';
import { Organ3 as organ4 } from '@mohayonao/wave-tables';
import { Dissonant2 as organ5 } from '@mohayonao/wave-tables';
import { Bass as bass2 } from '@mohayonao/wave-tables';
import { BassSubDub as bass3 } from '@mohayonao/wave-tables';
import { BassFuzz2 as bass4 } from '@mohayonao/wave-tables';
import { Trombone as brass2 } from '@mohayonao/wave-tables';
import { PhonemeAh as aah } from '@mohayonao/wave-tables';
import { PhonemeOoh as ooh } from '@mohayonao/wave-tables';
import { PhonemeEe as eeh } from '@mohayonao/wave-tables';
import { Buzzy1 as buzz } from '@mohayonao/wave-tables';
import { DynaEPBright as buzz2 } from '@mohayonao/wave-tables';
import { DissonantPiano as dissonance } from '@mohayonao/wave-tables';

export default Object.entries({
  sine,
  square,
  square2,
  sawtooth,
  triangle,
  triangle2,
  chiptune,
  organ,
  organ2,
  organ3,
  organ4,
  organ5,
  bass,
  bass2,
  bass3,
  bass4,
  brass,
  brass2,
  aah,
  ooh,
  eeh,
  buzz,
  buzz2,
  dissonance,
}).reduce((obj, [type, coefficients]) => {
  return Object.assign(obj, {
    [type]: createOscillator.bind(null, coefficients),
  });
}, {});

function createOscillator({ real, imag }, ctx) {
  let oscillator = ctx.createOscillator();
  oscillator.setPeriodicWave(
    ctx.createPeriodicWave(Float32Array.from(real), Float32Array.from(imag))
  );
  return oscillator;
}
