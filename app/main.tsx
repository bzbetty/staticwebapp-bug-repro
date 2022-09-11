
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Main() {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      mutations: {        
        onSettled: async () => {          
          //invalidate all caches when a mutation is run - could invalidate specific caches, but it's hard to know which ones have changed          
          await queryClient.invalidateQueries();
        },
        onError: (error, variables, context) => {
        },
      },
      queries: {
        keepPreviousData: true,
        staleTime: 600 * 1000,
        refetchInterval: 600 * 1000,
        onError: (error) => {
        }
      }
    }
  }), []);

  return (
      <QueryClientProvider client={queryClient}>
            <App />
      </QueryClientProvider >
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
     <DndProvider backend={HTML5Backend}>
        <Main />
    </DndProvider>
  </React.StrictMode>
);
