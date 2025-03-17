import { eventListenerStore } from "$lib/stores/eventListenerStore";
import { NotificationManager, type NotifyActionParams } from "$lib/utilities/notifications";

export function notifyAction<T extends HTMLElement>(node: T, params: NotifyActionParams) {
	let stop: () => void;

	const destroy = () => {
		stop?.();
	};

	const update = (params: NotifyActionParams) => {
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
