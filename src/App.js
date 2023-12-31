import React, {createContext} from 'react';
import Home from './Home.js';
import Speakers from './Speakers.js';

export const ConfigContext = createContext();

const pageToShow = (pageName) => {
  if(pageName === "Home") return <Home />;
  if(pageName === "Speakers") return <Speakers />;
    return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>
      {pageToShow(pageName)}
      </div>
    </ConfigContext.Provider>
  );
};

export default App;
