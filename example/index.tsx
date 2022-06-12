import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlitchText } from '../src/GlitchText';

const App = () => {
  return (
    <div style={{ fontSize: '70px' }}>
      <GlitchText theme='orange' text={''} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
