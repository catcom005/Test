import React from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../../container/stores/demo/DemoStore';
import DemoTemplate from './components/DemoTemplate';

const Demo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  const handleClick = () => {
    setUser({ name: 'test name', age: user.age + 1 });
    navigate('/');
  };


  return (
    <div>
      <button onClick={() => handleClick()}>Increase Age</button>
      <DemoTemplate />
    </div>
  );
};

export default Demo;
