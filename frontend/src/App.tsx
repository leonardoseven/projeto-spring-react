import NavBar from "components/navbar"
import Footer from "components/Footer"
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";


function App() {
  return (
    <>
      <NavBar />
      <div className="App container">
        <h1 className="text-primary">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-lg-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-lg-6">
            <h5 className="text-center text-secondary">Todoas as Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h1 className="text-primary">Dashboard de Vendas</h1>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
