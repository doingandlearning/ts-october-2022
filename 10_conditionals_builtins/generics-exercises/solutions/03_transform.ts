{
  type X = Promise<string>;
  type Y = Promise<{ field: number }>;

  type ResultX = Transform<X>; // ResultX type equals string
  type ResultY = Transform<Y>; // ResultY type equals { field: number }

  type Transform<A> = A extends Promise<infer Inner> ? Inner : never;
  type Result = Transform<Promise<string>>; // Result is string type
}
