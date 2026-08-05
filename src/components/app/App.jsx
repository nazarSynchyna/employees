import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../empoyees-list/employees-list";
import EmployeesAddForm from "../empoyees-add-form/employees-add-form";

import "./App.css";

function App() {
  const data = [
    { id: 1, name: "Jonh C.", salary: 800, increase: false },
    { id: 2, name: "Alex M.", salary: 3000, increase: true },
    { id: 3, name: "Carl W.", salary: 5000, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
