import IState from '../IState';
import StateTypes from './StateTypes';

export default class IdleState implements IState<StateTypes> {
  GetStateType(): StateTypes {
    return StateTypes.IDLE;
  }

  StartState(oldState: StateTypes | null): void {
    switch (oldState) {
      case StateTypes.IDLE:
        break;
      case StateTypes.CANCELED:
        break;
      default:
        console.log('State is unkown');
    }
  }

  TransitionStateTo(newStateRequest: StateTypes): StateTypes {
    return newStateRequest;
  }

  UpdateState(): void {}

  EndState(newState: StateTypes): void {}
}
