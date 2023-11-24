import { useAtom } from 'jotai';
import { userAtom } from './container/stores/demo/DemoStore';
import PrimaryButton from './components/button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/demo')
  }

  return (
    <div>
      <p>
        User: {user.name}, Age: {user.age}
      </p>
      <PrimaryButton title="Demo" onClick={() => handleClick()} id="demo_button" />
    </div>
  );
}

export default App;
