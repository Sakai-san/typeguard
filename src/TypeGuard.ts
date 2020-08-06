import { FunctionComponent } from "react";

type machineType = "machine";
type animalType = "animal";
type humanType = "human";

interface Kind {
  type: machineType | animalType | humanType;
}

interface Machine extends Kind {
  type: machineType;
  codename: string;
}

interface Animal extends Kind {
  type: animalType;
  nickname: string;
}

interface Human extends Kind {
  type: humanType;
  first: string;
  last: string;
}

const greetings = (thing: Human | Animal | Machine): void => {
  if (thing.type === "machine") {
    console.log("Hi machine", thing.codename);
  } else if (thing.type === "animal") {
    console.log("Hey animal", thing.nickname);
  } else {
    console.log("Hello human", `${thing.first} ${thing.last}`);
  }
};

const TypeGuard: FunctionComponent = () => {
  const x: Human = {
    type: "human",
    first: "Hiro",
    last: "Ymagata",
  };

  greetings(x);

  return null;
};

export default TypeGuard;
