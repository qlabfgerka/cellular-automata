export class Cell {
  name: string | undefined | null = null;
  color: string | undefined | null = null;
  volume: number | undefined | null = null;

  public constructor(init?: Partial<Cell>) {
    Object.assign(this, init);
  }
}
