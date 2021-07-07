import Chart from "src/components/Chart";
import { useParams, useHistory } from "react-router-dom";
import Header from "src/components/Header";
import { Hive } from "src/components/interfaces";
import hiveInformation from "src/components/DashboardComponents/Hive/hiveInformation";

interface typeForm {
  type: string;
}

const HivePage = () => {
  // Gets params from type in URL
  const type: typeForm = useParams();

  const history = useHistory();

  const renderedHives = hiveInformation.map((hive) => {
    if (hive.status === type.type) {
      return (
        <div
          className="hivepage-listitem"
          onClick={() => history.push(`/hive/id/${hive.id}`)}
        >
          <div className="hive-header">Hive: {hive.id}</div>
          <div className="hive-paragraph">
            Swarm Likelihood:{" "}
            {hive.status === "critical"
              ? "High"
              : hive.status === "warning"
              ? "Medium"
              : "Low"}
          </div>
          <div className="hivepage-listitem-icons">
            <div className="sound-icon"></div>
            <div className="hive-paragraph">{hive.sound}dB</div>
            <div className="divider-icon"></div>
            <div className="temp-icon"></div>
            <div className="hive-paragraph">{hive.temp}°C</div>
          </div>
        </div>
      );
    }
  });

  if (type?.type) {
    return (
      <div className="dashboard-container min-height">
        <Header />
        <div className={`hivepage-content hivepage-${type.type}`}>
          <div className="space">
            <div className="hive-header white">
              {type.type === "safe" ? "Healthy Hives" : ""}
              {type.type === "warning" ? "Swarm Warnings" : ""}
              {type.type === "critical" ? "Swarm Alerts" : ""}
            </div>
            {/* <div className="hive-subheader white">Total: {safeHives.length}</div> */}
          </div>
          {renderedHives}
        </div>
      </div>
    );
  } else {
    return <div>None specified type in URL</div>;
  }
};

export default HivePage;
