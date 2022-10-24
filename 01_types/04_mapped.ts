// utility
// advanced type
// mapped

namespace Option_Verbose {
  interface Options {
    material: string;
    backlight: string;
  }

  interface ReadOnlyOptions {
    readonly material: string;
    readonly backlight: string;
  }

  interface OptionalOptions {
    material?: string;
    backlight?: string;
  }

  interface NullableOptions {
    material: string | null;
    backlight: string | null;
  }
}

namespace Options_Terse {
  interface Options {
    material: string;
    backlight: string;
    meshDensity: number;
  }

  // interface ReadOnlyOptions {
  //   readonly material: string;
  //   readonly backlight: string;
  // }

  // [].map((item, index, array) => `index: array[index]`)
  type ReadOnlyOptionsMapper<T> = { readonly [k in keyof T]: T[k] };
  type ReadOnlyOptions = ReadOnlyOptionsMapper<Options>;

  type OptionalMapper<T> = { [k in keyof T]?: T[k] };
  type OptionalOptions = OptionalMapper<Options>;

  type NullableOptionsMapper<T> = { [k in keyof T]: T[k] | null };
  type NullableOptions = NullableOptionsMapper<Options>;

  type NullableIplayerOptions = NullableOptionsMapper<{
    subtitle: boolean;
    volume: number;
    region: string;
  }>;
}
