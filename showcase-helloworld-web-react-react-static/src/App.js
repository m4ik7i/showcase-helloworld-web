import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Router } from './components/Router';

const App = () => (
  <Root>
    <Head>
      <title>Hello World</title>
    </Head>
    <div className="content">
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </div>
  </Root>
);

export default App;
