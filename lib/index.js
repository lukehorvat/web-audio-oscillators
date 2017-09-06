import * as sine from "./sine";
import * as square from "./square";
import * as sawtooth from "./sawtooth";
import * as triangle from "./triangle";
import * as chiptune from "./chiptune";
import * as organ from "./organ";
import * as bass from "./bass";
import * as brass from "./brass";
import { DroppedSquare as square2 } from "@mohayonao/wave-tables";
import { WarmTriangle as triangle2 } from "@mohayonao/wave-tables";
import { Organ2 as organ2 } from "@mohayonao/wave-tables";
import { Organ3 as organ3 } from "@mohayonao/wave-tables";
import { Dissonant2 as organ4 } from "@mohayonao/wave-tables";
import { Bass as bass2 } from "@mohayonao/wave-tables";
import { BassSubDub as bass3 } from "@mohayonao/wave-tables";
import { BassFuzz2 as bass4 } from "@mohayonao/wave-tables";
import { Trombone as brass2 } from "@mohayonao/wave-tables";
import { PhonemeAh as choirAah } from "@mohayonao/wave-tables";
import { PhonemeOoh as choirOoh } from "@mohayonao/wave-tables";
import { PhonemeEe as choirEeh } from "@mohayonao/wave-tables";
import { Buzzy1 as buzz } from "@mohayonao/wave-tables";
import { DynaEPBright as buzz2 } from "@mohayonao/wave-tables";
import { DissonantPiano as dissonance } from "@mohayonao/wave-tables";

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
  bass,
  bass2,
  bass3,
  bass4,
  brass,
  brass2,
  choirAah,
  choirOoh,
  choirEeh,
  buzz,
  buzz2,
  dissonance,
}).reduce((obj, [ type, coefficients ]) => (
  Object.assign(obj, { [type]: createOscillator.bind(null, coefficients) })
), {});

function createOscillator(coefficients, ctx) {
  return new OscillatorNode(ctx, { periodicWave: new PeriodicWave(ctx, coefficients) });
}
