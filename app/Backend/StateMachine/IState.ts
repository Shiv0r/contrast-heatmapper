export default interface IState<T> {
  GetStateType(): T;

  StartState(oldState: T | null): void;

  TransitionStateTo(newStateRequest: T): T;

  UpdateState(): void;

  EndState(newState: T): void;
}
