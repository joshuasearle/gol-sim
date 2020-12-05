import React from 'react';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import { title, minTickRate, maxTickRate, initialTickRate } from './constants';

const App: React.FC = () => {
  return (
    <>
      <Header
        title={title}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        initialTickRate={initialTickRate}
      />
      <Body />
      <Footer />
    </>
  );
};

export default App;
