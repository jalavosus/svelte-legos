import BaseAlert from "$lib/shared/classes/BaseAlert";

export default class Alert<T extends HTMLElement = HTMLElement> extends BaseAlert<T> {
	constructor(
		readonly title: string,
		readonly description: string,
		readonly onClose?: () => void,
		readonly onOk?: () => void,
		readonly okButtonText: string = "OK",
	) {
		super(title, description, onClose, onOk, okButtonText);
		this.addDialog();
	}

	mount() {
		document.body.append(this.__container);
	}

	unmount() {
		this.__container.remove();
	}
}
