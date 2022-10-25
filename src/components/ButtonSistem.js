import React from 'react';
import '../App.css';
import { Button } from '@blueprintjs/core';

export const ButtonSistem = ({ intent, active, text }) => {
  return (
    <div>
      <div className="botoes">
        <h4>Botoes Sistema</h4>
        <Button
          className="bt-style"
          intent={intent}
          active={active}
          text={text}
        ></Button>
      </div>
    </div>
  );
};

export default ButtonSistem;
