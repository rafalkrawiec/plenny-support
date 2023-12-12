export type NestedSetItem = {
  id: number;
  _lft: number;
  _rgt: number;
  parent_id: number | null;
  title: string;
}

export type NestedSet<T extends NestedSetItem = any> = T[];

export function nestedSetRoot<T extends NestedSetItem = any>(data: NestedSet<T>) {
  return data.filter((node) => node.parent_id === null);
}

export function nestedSetChildren<T extends NestedSetItem = any>(data: NestedSet<T>, item: T) {
  return data.filter((node) => (
    node._lft > item._lft &&
    node._rgt < item._rgt &&
    node.parent_id === item.id
  ));
}

export function nestedSetAncestors<T extends NestedSetItem = any>(data: NestedSet<T>, item: T) {
  return data.filter((node) => (
    node._lft < item._lft &&
    node._rgt > item._rgt
  ));
}

export function nestedSetDescendants<T extends NestedSetItem = any>(data: NestedSet<T>, item: T) {
  return data.filter((node) => (
    node._lft > item._lft &&
    node._rgt < item._rgt
  ));
}
