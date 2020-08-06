import { FunctionComponent } from "react";

enum Kinds {
  machine = "machine",
  animal = "animal",
  human = "human",
}

interface Kind {
  type: Kinds;
}

interface Machine extends Kind {
  type: Kinds.machine;
  name: string;
}

interface Animal extends Kind {
  type: Kinds.animal;
  name: string[];
}

interface Human extends Kind {
  type: Kinds.human;
  name: string;
}

const greetings = (thing: Human | Animal | Machine): void => {
  if (thing.type === Kinds.machine) {
    console.log("Hi machine", thing.name);
  } else if (thing.type === Kinds.animal) {
    console.log("Hey animal", thing.name.join());
  } else {
    console.log("Hello human", `${thing.name}`);
  }
};

const TypeGuard: FunctionComponent = () => {
  const cat: Animal = {
    type: Kinds.animal,
    name: ["sweety", "honey", "cutie"],
  };

  greetings(cat);

  return null;
};

export default TypeGuard;
