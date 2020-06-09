import "reflect-metadata";
import { Validate } from "../src";
import { Required, SchemaOptions } from "../src/decorators/BaseDecorators";

class Inner {
  @Required()
  name: string;
}

@SchemaOptions({ allowUnknown: true })
class Outer {
  @Required()
  inner: Inner;
  @Required()
  name: string;
}


async function main() {
  const t = {
    name: 'outter',
    inner: {
      name: 'inner'
    }
  };
  await Validate(Outer, t);
}

main().catch(console.log);
