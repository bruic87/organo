import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278',
    },

    {
      nome: 'Front-End',
      corPrimaria: '#e8f8ff',
      corSecundaria: '#82cffa',
    },

    {
      nome: 'Data Science',
      corPrimaria: '#f0f8e2',
      corSecundaria: '#a6d157',
    },

    {
      nome: 'Devops',
      corPrimaria: '#fde7e8',
      corSecundaria: '#e06b69',
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#fae9f5',
      corSecundaria: '#db6ebf',
    },

    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ffba05',
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffeedf',
      corSecundaria: '#ff8a29',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time key={time.nome} nome = {time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      
    </div>
  );
}

export default App;
