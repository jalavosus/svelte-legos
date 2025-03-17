export type NotificationType = "success" | "error" | "info" | "warning";

export interface NotificationParams {
	title: string;
	description?: string;
	type?: NotificationType;
	duration?: number;
}
