export type StateTable = Record<string, Record<string, boolean> | boolean>

export function lookup(object: StateTable) {
  for (let key of Object.keys(object)) {
    if (object[key] === true) {
      return true;
    }

    if (typeof object[key] === 'object') {
      if (lookup(object[key] as StateTable)) {
        return true;
      }
    }
  }

  return false;
}
