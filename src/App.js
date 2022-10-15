import React from "react";
import QueryPosts from "./components/QueryPosts";
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      {/* <FetchAPI /> */}
      <QueryClientProvider client={queryClient}>
        <QueryPosts />
      </QueryClientProvider>
    </>
  );
}

export default App;
