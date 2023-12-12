type UnwrapItem<T = any> = T extends Array<infer I> ? Array<I> : Array<T>;

export function arrayWrap<T>(data: T) {
  if (data instanceof Array) {
    return data as UnwrapItem<T>;
  } else {
    return [data] as UnwrapItem<T>;
  }
}
