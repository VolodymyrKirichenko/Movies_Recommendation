import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    handleChangeOpen,
  };
};
