import { MostSearchedSection } from "./components/MostSearchedSection";
import { LastSearchesSection } from "./components/LastSearchesSection";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { LastSearchedProvider } from './hooks/useLastSearched'
import { MostSearchedProvider } from './hooks/useMostSearched'

import './styles/app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <LastSearchedProvider>
      <MostSearchedProvider>
        <Main />
        <MostSearchedSection />
        <LastSearchesSection />
      </MostSearchedProvider>
      </LastSearchedProvider>
    </div>
  );
}

export default App;