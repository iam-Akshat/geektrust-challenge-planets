import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';

const qc = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>

    </QueryClientProvider>
  );
}

export default App;
