{
  type IsString<T> = T extends string ? true : false;

  type A = IsString<"Hello">;
  type B = IsString<1234>;
}
{
  abstract class ApplicationError {
    abstract status: number;
    abstract message: string;
  }

  class ServerError extends ApplicationError {
    status = 500;
    constructor(public message: string, ...rest: any[]) {
      super();
    }
  }

  type ErrorType<T extends { error: ApplicationError | Error }> =
    T["error"] extends ApplicationError ? ApplicationError : Error;

  type error = ErrorType<{ error: ServerError }>;
}
{
  type NonNullable<T> = T extends null | undefined ? never : T;
  type Here = NonNullable<string | boolean | null | undefined>;
}
