// Interface for Notification Structure
export interface NotificationType {
  type: "Safe" | "Warning" | "Critical";
  description: string;
  date: string;
  id: number;
}
