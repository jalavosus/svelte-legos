export type NotificationType = "success" | "error" | "info" | "warning";

export interface NotifyActionParams {
	title: string;
	description?: string;
	type?: NotificationType;
	duration?: number;
}
