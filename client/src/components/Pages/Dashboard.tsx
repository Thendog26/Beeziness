import Header from "src/components/Header";
import AlertsForm from "src/components/DashboardComponents/Alerts/AlertsForm";
import NotificationsBoard from "src/components/DashboardComponents/Notifications/NotificationsBoard";
import { NotificationType } from "src/components/interfaces";

const DashboardPage = () => {
  const alerts: NotificationType[] = [
    {
      type: "Critical",
      description:
        "Take action Immedietly on Hive 'Front yard' before swarming occurs.",
      date: "2021-08-05",
      id: 1,
    },
    {
      type: "Warning",
      description:
        "Hive 'Mid yard Box 5' and 'Front yard' have a 90% chance of swarming between 30th July - 12th August.",
      date: "2021-07-28",
      id: 2,
    },
    {
      type: "Safe",
      description: "Your 30 day history summary can be found here",
      date: "2021-07-30",
      id: 3,
    },
  ];

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-body">
        <AlertsForm />
        <NotificationsBoard notificationsList={alerts} />
      </div>
    </div>
  );
};

export default DashboardPage;
