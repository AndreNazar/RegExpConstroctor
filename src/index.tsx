import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import MainPage from './components/main-page/MainPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);