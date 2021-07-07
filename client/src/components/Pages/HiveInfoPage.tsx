import Header from "src/components/Header";
import { Hive } from "src/components/interfaces";
import hiveInformation from "src/components/DashboardComponents/Hive/hiveInformation";
import { useParams } from "react-router-dom";
import Chart from "src/components/Chart";

interface typeForm {
  id: string;
}
const HiveInfoPage = () => {
  const id: typeForm = useParams();
  const hiveSelected = hiveInformation[parseInt(id.id)];

  return (
    <div className="dashboard-container min-height">
      <Header />
      <div className="hivepageinfo-container">
        <h2>Hive {id.id ?? ""}</h2>
        <div className="hivepage-listitem">
          <div className="hive-paragraph">
            Swarm Likelihood:{" "}
            {hiveSelected.status === "critical"
              ? "High"
              : hiveSelected.status === "warning"
              ? "Medium"
              : "Low"}
          </div>
          <div className="hive-paragraph">
            Expected Swam Date: <br />
            {hiveSelected.status === "critical" ||
            hiveSelected.status === "warning"
              ? `${hiveSelected.dateFrom.getUTCDate()}/${hiveSelected.dateFrom.getUTCMonth()}/${hiveSelected.dateFrom.getUTCFullYear()} - ${hiveSelected.dateFrom.getUTCDate()}/${hiveSelected.dateFrom.getUTCMonth()}/${hiveSelected.dateFrom.getUTCFullYear()}`
              : "-"}
          </div>
          <div className="hivepage-listitem-icons">
            <div className="sound-icon"></div>
            <div className="hive-paragraph">{hiveSelected.sound}dB</div>
            <div className="divider-icon"></div>
            <div className="temp-icon"></div>
            <div className="hive-paragraph">{hiveSelected.temp}°C</div>
          </div>
        </div>
        <div className="hivepage-graph">
          <div className="hive-paragraph">Temp Graph</div>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default HiveInfoPage;
