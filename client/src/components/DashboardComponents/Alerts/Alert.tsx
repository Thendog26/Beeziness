const Alert = ({ number, type }: { number: number; type: string }) => {
  if (type === "safe") {
    return (
      <div className="alert safe">
        <div>
          <div className="alert-number">{number}</div>
          <div className="alert-description">Healthy Hives</div>
        </div>
        <i className="right-arrow" />
      </div>
    );
  } else if (type === "warning") {
    return (
      <div className="alert warning">
        <div>
          <div className="alert-number">{number}</div>
          <div className="alert-description">Swarm Warnings</div>
        </div>
        <i className="right-arrow" />
      </div>
    );
  } else if (type === "critical") {
    return (
      <div className="alert critical">
        <div>
          <div className="alert-number">{number}</div>
          <div className="alert-description">Swarm Alerts</div>
        </div>
        <i className="right-arrow" />
      </div>
    );
  } else {
    return <div>Why are u here?</div>;
  }
};

export default Alert;
