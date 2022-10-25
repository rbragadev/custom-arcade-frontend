import { Container } from './styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePack, changeTheme } from '../../redux/userSlice';

export const ButtonPersonalize = () => {
  const [theme, setTheme] = useState('');
  const [pack, setPack] = useState('');

  const dispatch = useDispatch();

  const handleChangeTheme = (text) => {
    setTheme(text.target.value);
    dispatch(changeTheme(text.target.value));
  };

  const handleChangePack = (text) => {
    setPack(text.target.value);
    dispatch(changePack(text.target.value));
  };

  return (
    <>
      <Container>
        <h4>Botoes Personalização</h4>
        <label>
          {' Tema: '}
          <select name="Tema" value={theme} onChange={handleChangeTheme}>
            <option value="Tema DC">Tema: DC</option>
            <option value="Tema Mortal">Tema: Mortal</option>
            <option value="Tema Super Mario">Tema: Super Mario</option>
          </select>
        </label>
        <label>
          {' Sistema: '}
          <select name="Sistema" value={pack} onChange={handleChangePack}>
            <option value="Pack 1">Pack 1</option>
            <option value="Pack 2">Pack 2</option>
          </select>
        </label>
      </Container>
    </>
  );
};

export default ButtonPersonalize;
