import React from 'react';

type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
};

const PrimaryButton: React.FC<ButtonProps> = ({title, id, onClick}) => {
  return (
    <button id={id} className='py-2 px-4 bg-slate-500 text-white rounded-lg' onClick={onClick}>
        {title}
    </button>
  );
};

export default PrimaryButton;
