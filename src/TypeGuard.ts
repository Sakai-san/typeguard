import { FunctionComponent } from "react";

interface Base {
  type: "user" | "device" | "good";
}

interface User extends Base {
  type: "user";
  first: string;
  last: string;
}

interface Device extends Base {
  type: "device";
  serial: string;
}

interface Good extends Base {
  type: "good";
  brand: string;
}

const greetings = (thing: User | Device | Good): void => {
  if (thing.type === "user") {
    console.log("User object", `${thing.first} ${thing.last}`);
  } else if (thing.type === "device") {
    console.log("Device object", thing.serial);
  } else {
    console.log("Good object", thing.brand);
  }
};

const TypeGuard: FunctionComponent = () => {
  const x: User = {
    type: "user",
    first: "Hiro",
    last: "Ymagata",
  };

  greetings(x);

  return null;
};

export default TypeGuard;
