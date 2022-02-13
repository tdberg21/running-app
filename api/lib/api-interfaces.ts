export interface Run {
  distance: number,
  duration: string
}

export interface RunEntity extends Run {
  id: string
}