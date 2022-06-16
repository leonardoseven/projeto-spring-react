import NavBar from "components/navbar"
import Footer from "components/Footer"
import DataTable from "components/DataTable";


function App() {
  return (
    <>
      <NavBar />
      <div className="App container">
        <h1 className="text-primary">Ola mundo</h1>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
