import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="tete">
          <img
            src="https://avatars.githubusercontent.com/u/36078126?s=460&u=65de05da516c013395ddb684c528246aa7083211&v=4"
            alt="Junio Resende"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="tete">
          <img
            src="https://avatars.githubusercontent.com/u/36078126?s=460&u=65de05da516c013395ddb684c528246aa7083211&v=4"
            alt="Junio Resende"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="tete">
          <img
            src="https://avatars.githubusercontent.com/u/36078126?s=460&u=65de05da516c013395ddb684c528246aa7083211&v=4"
            alt="Junio Resende"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
