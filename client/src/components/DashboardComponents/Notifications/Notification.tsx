const Notification = ({
  type,
  description,
  id,
}: {
  type: string;
  description: string;
  id: number;
}) => {
  return (
    <div id={`${id}`} className="notification-content">
      <div className={`notification-${type}-icon`} />
      <div className="notification-content-text">
        <span className={`${type}-highlight`}>{type} - </span>
        {description}
      </div>
    </div>
  );
};

export default Notification;
