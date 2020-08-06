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
  codename: string;
}

interface Animal extends Kind {
  type: Kinds.animal;
  nickname: string;
}

interface Human extends Kind {
  type: Kinds.human;
  first: string;
  last: string;
}

const greetings = (thing: Human | Animal | Machine): void => {
  if (thing.type === Kinds.machine) {
    console.log("Hi machine", thing.codename);
  } else if (thing.type === Kinds.animal) {
    console.log("Hey animal", thing.nickname);
  } else {
    console.log("Hello human", `${thing.first} ${thing.last}`);
  }
};

const TypeGuard: FunctionComponent = () => {
  const x: Human = {
    type: Kinds.human,
    first: "Hiro",
    last: "Ymagata",
  };

  greetings(x);

  return null;
};

export default TypeGuard;
