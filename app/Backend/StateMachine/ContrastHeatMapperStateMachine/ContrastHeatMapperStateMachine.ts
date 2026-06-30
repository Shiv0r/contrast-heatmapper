import AStateMachine from '../AStateMachine';
import IState from '../IState';
import IdleState from './IdleState';
import StateTypes from './StateTypes';

export default class ContrastHeatmapperStateMachine extends AStateMachine<StateTypes> {
  protected CreateDefaultState(): IState<StateTypes> {
    return new IdleState();
  }

  protected CreateState(stateType: StateTypes): {
    success: boolean;
    newState: IState<StateTypes> | null;
  } {
    switch (stateType) {
      case StateTypes.IDLE:
        return { success: true, newState: new IdleState() };
      case StateTypes.CRAWLING:
        return;
    }
  }
}
