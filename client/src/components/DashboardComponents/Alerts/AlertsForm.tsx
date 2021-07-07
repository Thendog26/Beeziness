import Alert from "./Alert";
import "./Alerts.css";

const AlertsForm = () => {
  return (
    <div className="alerts-form">
      <Alert type="critical" number={3} />
      <Alert type="warning" number={2} />
      <Alert type="safe" number={7} />
    </div>
  );
};

export default AlertsForm;
