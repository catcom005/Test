import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../../container/stores/demo/DemoStore';

const Demo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);

  const handleClick = () => {
    setUser({ name: 'test name', age: user.age + 1 });
    navigate('/');
  };

  useEffect(() => {
    console.log(user);
  },[])

  return (
    <div>
      <button onClick={() => handleClick()}>Increase Age</button>
    </div>
  );
};

export default Demo;
