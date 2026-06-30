// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class Delegate<T extends (...args: any[]) => void> {
  private handlers: T[] = [];

  Subscribe(handler: T): void {
    this.handlers.push(handler);
  }
  Unsubscribe(handler: T): void {
    this.handlers = this.handlers.filter((h: T) => h !== handler);
  }
  Invoke(...args: Parameters<T>): void {
    this.handlers.forEach((h: T) => h(...args));
  }
}
