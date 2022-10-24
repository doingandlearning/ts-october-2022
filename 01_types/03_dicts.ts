{
  // the dictionary type
  const obj1 = {
    hello: "Bonjour",
    [`${Math.random()}`]: "population",
    [Symbol("name")]: "Michael",
  };

  interface Celaphopod {
    hasink: boolean;
    arms: number;
    hearts: number;
  }

  interface CelaDict {
    [species: string]: Celaphopod;
  }

  const celaDict: CelaDict = {};

  celaDict.Octopus = { hasink: true, arms: 8, hearts: 3 };
}
