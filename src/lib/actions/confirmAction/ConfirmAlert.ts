import Alert from "$lib/actions/alertAction/Alert";

export default class ConfirmAlert<T extends HTMLElement = HTMLElement> extends Alert<T> {
	// override addHeader so as to add the cancel button to btn-row div.
	// superclass addHeader used to construct the main alert window.
	protected addHeader(dialog: HTMLDivElement) {
		super.addHeader(dialog);

		const cancelBtn = document.createElement("button");
		const cancelBtnStyles = `
			cursor: pointer;
			font-size: 12px;
			background-color: #f56c6c;
			padding: 6px 16px;
			border-radius: 8px;
			margin-top: 8px;
			margin-left: 4px;
		`;

		cancelBtn.textContent = this.cancelText;
		cancelBtn.setAttribute("style", cancelBtnStyles);

		cancelBtn.addEventListener("click", () => {
			this.onCancel?.();
		});

		const buttonRow = dialog.getElementsByClassName("btn-row")[0];
		buttonRow.append(cancelBtn);
	}
}
