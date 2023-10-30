import "./App.css";
import LoginDB from "./components/LoginDB";
import OrderDb from "./components/OrderDb";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OrderDb />
      <LoginDB />
    </QueryClientProvider>
  );
}

export default App;
