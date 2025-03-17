import { eventListenerStore } from "$lib/stores/eventListenerStore";
import { NotificationManager, type NotificationParams } from "$lib/shared/notifications";

export function notifyAction<T extends HTMLElement>(node: T, params: NotificationParams) {
	let stop: () => void;

	const destroy = () => {
		stop?.();
	};

	const update = (params: NotificationParams) => {
		destroy();
		function handleClick() {
			NotificationManager.getInstance().createNotification(params);
		}

		({ stop } = eventListenerStore("click", handleClick, node));
	};

	update(params);

	return {
		update,
		destroy
	};
}
