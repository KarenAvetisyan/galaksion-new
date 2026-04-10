export interface Ideable {
  id: number;
}

export interface Paginateable<T> {
  data: T[];
  count: number;
}
