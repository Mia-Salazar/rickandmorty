import ReactDOM from 'react-dom/client';
import App from './app';
import { ReactQueryProvider } from './services/ReactQueryProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ReactQueryProvider>
        <App />
    </ReactQueryProvider>
);
