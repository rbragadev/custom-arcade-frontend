import '../../App.css';
import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Card, Elevation } from '@blueprintjs/core';

export const Resume = () => {
  const { theme, pack } = useSelector((state) => state.user);
  return (
    <div>
      <Card interactive={true} elevation={Elevation.TWO}>
        <h4>
          <a href="/">Resumo do Pedido</a>
        </h4>
        <p>--------Seu Fliperama---------</p>

        <p>----Informações Tecnicas:-----</p>
        <p>Modelo: {theme}</p>
        <p>Sistema:{pack}</p>
        <p>Comandos:</p>
        <p>Botões:</p>
        <p>Adicionais:</p>
        <Button>Comprar Agora</Button>
      </Card>
    </div>
  );
};

export default Resume;
