import * as sine from "./sine";
import * as square from "./square";
import * as sawtooth from "./sawtooth";
import * as triangle from "./triangle";
import * as chiptune from "./chiptune";
import * as organ from "./organ";
import * as bass from "./bass";
import * as brass from "./brass";

export default Object.entries({
  sine,
  square,
  sawtooth,
  triangle,
  chiptune,
  organ,
  bass,
  brass,
}).reduce((obj, [ type, coefficients ]) => (
  Object.assign(obj, { [type]: createOscillator.bind(null, coefficients) })
), {});

function createOscillator(coefficients, ctx) {
  return new OscillatorNode(ctx, { periodicWave: new PeriodicWave(ctx, coefficients) });
}
