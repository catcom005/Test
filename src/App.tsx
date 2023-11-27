import { useAtom } from 'jotai';
import { userAtom } from '@/container/stores/demo/DemoStore';
import PrimaryButton from '@/components/button/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/demo');
  };

  return (
    <div>
      <p>
        {t('test')}: {user.name}, Age: {user.age}
      </p>
      <PrimaryButton title="Demo" onClick={() => handleClick()} />
    </div>
  );
}

export default App;
