import { eventListenerStore } from "$lib/stores/eventListenerStore";
import Alert from "./Alert";

interface AlertActionParams {
	title: string;
	description: string;
	onClose?: () => void;
	onOk?: () => void;
}

export function alertAction<T extends HTMLElement>(node: T, params: AlertActionParams) {
	let stop: () => void;

	const destroy = () => {
		stop && stop();
	};

	let alert: Alert | undefined;

	const update = ({ title, description, onClose, onOk }: AlertActionParams) => {
		destroy();

		function handleClick() {
			alert = new Alert(
				title,
				description,
				() => {
					onClose && onClose();
					alert?.unmount();
				},
				() => {
					onOk && onOk();
					alert?.unmount();
				}
			);

			alert.mount();
		}

		({ stop } = eventListenerStore("click", handleClick, node));
	};

	update(params);

	return {
		update,
		destroy,
	};
}
