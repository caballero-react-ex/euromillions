import React from 'react';
import '../main.scss';

import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
      <Lotto 
      title="Euromillones" 
      totalBalls={5} 
      totalStars={2}
      />
    </div>
  );
}

export default App;
