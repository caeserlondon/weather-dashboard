import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const queryClien = new QueryClient();

const container = document.getElementById('root');
if (container) {
	createRoot(container).render(
		<StrictMode>
			<QueryClientProvider client={queryClien}>
				<App />
			</QueryClientProvider>
		</StrictMode>,
	);
}
