import StockLineChart from "../../components/StockLineChart";
import VolumeChart from "../../components/VolumeBarChart";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6 mt-10 flex flex-col lg:flex-row items-center justify-center">
      <StockLineChart />
      <VolumeChart />
    </div>
  );
};

export default Dashboard;
