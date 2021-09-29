import React from 'react';

import ButtonMaterialUI from '@material-ui/core/Button';

export const Button = ({ label, variant, onClick }) => {

  return (
    <ButtonMaterialUI
         variant={variant}
        onClick={onClick}
      >
        {label}
      </ButtonMaterialUI>
  );
};
