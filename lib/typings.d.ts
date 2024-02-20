declare module '@mohayonao/wave-tables' {
  type WaveTableType =
    | 'Bass'
    | 'BassAmp360'
    | 'BassFuzz'
    | 'BassFuzz2'
    | 'BassSubDub'
    | 'BassSubDub2'
    | 'Brass'
    | 'BritBlues'
    | 'BritBluesDriven'
    | 'Buzzy1'
    | 'Buzzy2'
    | 'Celeste'
    | 'ChorusStrings'
    | 'Dissonant1'
    | 'Dissonant2'
    | 'DissonantPiano'
    | 'DroppedSaw'
    | 'DroppedSquare'
    | 'DynaEPBright'
    | 'DynaEPMed'
    | 'Ethnic33'
    | 'Full1'
    | 'Full2'
    | 'GuitarFuzz'
    | 'Harsh'
    | 'MklHard'
    | 'Noise'
    | 'Organ2'
    | 'Organ3'
    | 'PhonemeAh'
    | 'PhonemeBah'
    | 'PhonemeEe'
    | 'PhonemeO'
    | 'PhonemeOoh'
    | 'PhonemePopAhhhs'
    | 'Piano'
    | 'Pulse'
    | 'PutneyWavering'
    | 'Saw'
    | 'Square'
    | 'TB303Square'
    | 'Throaty'
    | 'Triangle'
    | 'Trombone'
    | 'TwelveOpTines'
    | 'TwelveStringGuitar1'
    | 'WarmSaw'
    | 'WarmSquare'
    | 'WarmTriangle'
    | 'Wurlitzer'
    | 'Wurlitzer2';

  const waveTables: {
    [T in WaveTableType]: {
      real: number[];
      imag: number[];
    };
  };

  export = waveTables;
}
