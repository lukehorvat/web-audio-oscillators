import { WaveTable } from './wave-tables/wave-table';
import { sine } from './wave-tables/sine';
import { square } from './wave-tables/square';
import { sawtooth } from './wave-tables/sawtooth';
import { triangle } from './wave-tables/triangle';
import { chiptune } from './wave-tables/chiptune';
import { organ } from './wave-tables/organ';
import { organ2 } from './wave-tables/organ2';
import { bass } from './wave-tables/bass';
import { brass } from './wave-tables/brass';
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

const waveTables = {
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
};

export type CustomOscillatorType = keyof typeof waveTables;

export type CustomOscillatorFactory = {
  [T in CustomOscillatorType]: (context: BaseAudioContext) => OscillatorNode;
};

export const customOscillatorTypes = Object.keys(
  waveTables
) as CustomOscillatorType[];

export const customOscillators: CustomOscillatorFactory =
  customOscillatorTypes.reduce((obj, type) => {
    return Object.assign(obj, {
      [type]: createCustomOscillator.bind(null, waveTables[type]),
    });
  }, {} as CustomOscillatorFactory);

function createCustomOscillator(
  waveTable: WaveTable,
  context: BaseAudioContext
): OscillatorNode {
  const oscillator = context.createOscillator();
  oscillator.setPeriodicWave(
    context.createPeriodicWave(
      Float32Array.from(waveTable.real),
      Float32Array.from(waveTable.imag)
    )
  );
  return oscillator;
}
