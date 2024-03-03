declare module 'soundbank-reverb' {
  export type ReverbNode = GainNode & {
    readonly wet: AudioParam;
    readonly dry: AudioParam;
    readonly cutoff: AudioParam;
    filterType: BiquadFilterType;
    time: number;
    decay: number;
    reverse: boolean;
  };

  function Reverb(context: BaseAudioContext): ReverbNode;
  export default Reverb;
}

declare module 'qwerty-hancock' {
  class QwertyHancock {
    constructor(options: { id: string; octaves?: number; startNote?: string });
    keyDown(note: string, frequency: number): void;
    keyUp(note: string, frequency: number): void;
  }

  export default QwertyHancock;
}
