interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "mog" | "mordred" | "molly";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  mog: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  molly: { age: 16, breed: "British Shorthair" },
};

interface CatDict {
  [name: string]: CatInfo;
}

const newCats: CatDict = {
  johnny: { age: 10, breed: "Persian" },
};
