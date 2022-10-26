{
  type A = number | string;
  type B = Exclude<A, string>;
}

{
  type A = number | string | "Hello" | true;
  type B = number | boolean;
  type C = Extract<A, number | boolean>;
}

{
  type A = { a?: number | null };
  type B = NonNullable<A["a"]>;
}

{
  type A = (a: number) => string;
  type B = ReturnType<A>;
}

{
  type A = { new (): B };
  type B = { b: number };

  type C = InstanceType<A>;
}
