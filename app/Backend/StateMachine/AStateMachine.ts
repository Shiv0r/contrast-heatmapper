import IState from './IState';
import Delegate from '../Helper/delegator';

export default abstract class AStateMachine<T> {
  public onStateChange = new Delegate<(newState: IState<T>, oldState: IState<T> | null) => void>();
  protected abstract CreateDefaultState(): IState<T>;
  protected abstract CreateState(stateType: T): { success: boolean; newState: IState<T> | null };
  protected abstract IsStateUnknown(state: T | undefined): boolean;

  private _currentState: IState<T> | null = this.CreateDefaultState();
  get currentState(): IState<T> | null {
    return this._currentState;
  }
  private set currentState(value: IState<T>) {
    if (this._currentState !== null) {
      this.currentState?.EndState(value.GetStateType());
    }
    const oldState = this._currentState;
    this._currentState = value;
    this._currentState.StartState(oldState !== null ? oldState.GetStateType() : null);
    this.onStateChange?.Invoke(this._currentState, oldState);
  }

  public RequestState(newState: T): void {
    const state = this._currentState?.TransitionStateTo(newState);
    if (this.IsStateUnknown(state)) return;

    const { success, newState: outState } = this.CreateState(state!);
    if (!success || outState === null) return;
    this.currentState = outState;
  }
}
