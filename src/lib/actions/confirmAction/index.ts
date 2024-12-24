import { eventListenerStore } from "$lib/stores/eventListenerStore";
import ConfirmAlert from "./ConfirmAlert";

interface ConfirmActionParams {
	title: string;
	description: string;
	onCancel?: () => void;
	onConfirm?: () => void;
	cancelText?: string;
	confirmText?: string;
}

export function confirmAction<T extends HTMLElement>(node: T, params: ConfirmActionParams) {
	let stop: () => void;

	const destroy = () => {
		stop && stop();
	};

	let alert: ConfirmAlert | undefined;

	const update = ({ title, description, onCancel, onConfirm, cancelText="Cancel", confirmText="OK" }: ConfirmActionParams) => {
		destroy();

		function handleClick() {
			alert = new ConfirmAlert(
				title,
				description,
				() => {
					onCancel?.();
					alert?.unmount();
				},
				() => {
					onConfirm?.();
					alert?.unmount();
				},
				confirmText,
				cancelText,
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
