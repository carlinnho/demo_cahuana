import React from 'react';

interface ButtonprimaryProps {
  texto: string;
  onClick: () => void;
}

const Buttonprimary: React.FC<ButtonprimaryProps> = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="btn-primary">
      {texto}
    </button>
  );
};

export default Buttonprimary;
