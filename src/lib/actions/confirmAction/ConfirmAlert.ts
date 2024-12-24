import BaseAlert from "$lib/shared/classes/BaseAlert";

export default class ConfirmAlert<T extends HTMLElement = HTMLElement> extends BaseAlert<T> {
	constructor(
		readonly title: string,
		readonly description: string,
		readonly onCancel?: () => void,
		readonly onConfirm?: () => void,
		readonly confirmText: string = "OK",
		readonly cancelText: string = "Cancel"
	) {
		super(title, description, onCancel, onConfirm, confirmText);
		this.addDialog();
	}

	protected addDialog() {
		const dialog = document.createElement("div");
		const dialogStyles = `
      width: 300px;
      padding: 12px 16px;
      border-radius: 8px;
      background-color: white;
      display: flex;
      flex-direction: column;
    `;

		dialog.setAttribute("style", dialogStyles);

		this.addHeader(dialog);

		this.__container.append(dialog);
	}

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

		// dialog.append(cancelBtn);
	}

	mount() {
		document.body.append(this.__container);
	}

	unmount() {
		this.__container.remove();
	}
}
