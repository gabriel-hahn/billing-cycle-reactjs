import React, { useState } from 'react';

import { SandwichIconContainer, SmallNavBarContainer } from './styles';

export interface StylesProps {
  sandwichClicked: boolean;
}

export interface PropsInterface {
  onClick: (clicked: boolean) => void;
}

const SandwichMenu: React.FC<PropsInterface> = ({ onClick }) => {
  const [sandwichClicked, setSandwichClicked] = useState<boolean>(false);

  const toggleSandwichMenu = () => {
    setSandwichClicked(!sandwichClicked);

    onClick(!sandwichClicked);
  };

  return (
    <SmallNavBarContainer onClick={toggleSandwichMenu}>
      <SandwichIconContainer sandwichClicked={sandwichClicked}>
        <span />
        <span />
        <span />
      </SandwichIconContainer>
    </SmallNavBarContainer>
  );
};

export default SandwichMenu;
