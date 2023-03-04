import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import TodoList from "./components/todoList/TodoList";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [curFilter, setCurFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={curFilter}
        onFilterChange={setCurFilter}
      />
      <TodoList filter={curFilter} />
    </DarkModeProvider>
  );
}

export default App;
