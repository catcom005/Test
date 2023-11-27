import { useLoadingAtom } from '../../container/stores/demo/DemoStore';
import { useAtom } from 'jotai';

const LoadingComponent = () => {
  const [loading] = useAtom(useLoadingAtom);

  return { loading };
};

export default LoadingComponent;
