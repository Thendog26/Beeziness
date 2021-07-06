import Alert from "./Alert";
import "./Alerts.css";

const AlertsForm = () => {
  return (
    <div className="alerts-form">
      <Alert type="critical" number={1} />
      <Alert type="warning" number={5} />
      <Alert type="safe" number={20} />
    </div>
  );
};

export default AlertsForm;
