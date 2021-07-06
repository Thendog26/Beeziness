import { NotificationType } from "src/components/interfaces";
import Notification from "src/components/DashboardComponents/Notifications/Notification";
import "./Notifications.css";

const NotificationsBoard = ({
  notificationsList,
}: {
  notificationsList: NotificationType[];
}) => {
  const renderedNotifications = notificationsList.map((alert) => {
    return (
      <Notification
        id={alert.id}
        type={alert.type}
        description={alert.description}
      />
    );
  });

  return (
    <div className="notifications-body">
      <div className="notifications-header">Notifications</div>
      {renderedNotifications}
      <div className="notifications-footer"></div>
    </div>
  );
};

export default NotificationsBoard;
