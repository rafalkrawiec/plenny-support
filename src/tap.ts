export function tap<T = unknown>(value: T, callback: (value: T) => void): T {
  callback(value);
  return value;
}
