// Interface for Notification Structure
export interface NotificationType {
  type: "Safe" | "Warning" | "Critical";
  description: string;
  date: string;
  id: number;
}

export interface Hive {
  id: number;
  clientName: string;
  date: Date;
  dateFrom: Date;
  dateTo: Date;
  percentage: number;
  sound: number;
  temp: number;
  status: string;
}
