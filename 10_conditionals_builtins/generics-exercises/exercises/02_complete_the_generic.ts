// Type this properly - it should be using a generic.
{
  function createPair<TypeX, TypeY>(x: TypeX, y: TypeY) {
    return [x, y];
  }

  console.log(createPair<string, number>("Meaning", 42));
}
