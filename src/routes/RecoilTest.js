import {useRecoilState} from 'recoil';
import {testState} from '../recoil/atoms/testState';

function RecoilTest() {

  const [homeState, setHomeState] = useRecoilState(testState);

  return (
      <div>
        <div>
          <p>hello recoil test</p>
          <p>Home State: {homeState.name}</p>
          <button onClick={() => setHomeState({name: 'Home'})}>Set Home State</button>
        </div>
      </div>
  );
}

export default RecoilTest;