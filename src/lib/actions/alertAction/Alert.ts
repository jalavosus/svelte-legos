export interface AlertParams {
	title: string;
	description: string;
	onCancel?: () => void;
	onConfirm?: () => void;
	confirmText?: string;
	cancelText?: string;
}

export default class Alert<T extends HTMLElement = HTMLElement> {
	protected __container: HTMLDivElement;

	protected title: string;
	protected description: string;

	protected onCancel?: () => void;
	protected onConfirm?: () => void;

	private readonly confirmText: string;
	// hiding this here for extensibility.
	// turns out, I can do whatever I want in this class.
	// Huzzah.
	protected readonly cancelText: string;

	constructor({
		title,
		description,
		onCancel,
		onConfirm,
		confirmText = "OK",
		cancelText = "Cancel",
	}: AlertParams) {
		this.__container = this.makeContainer();

		this.title = title;
		this.description = description;
		this.onCancel = onCancel;
		this.onConfirm = onConfirm;
		this.confirmText = confirmText;
		this.cancelText = cancelText;

		this.addDialog();
	}

	protected makeContainer(): HTMLDivElement {
		const container = document.createElement("div");
		const containerStyles = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100000;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
    `;

		container.setAttribute("style", containerStyles);

		return container;
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
		const header = document.createElement("div");
		const headerStyles = `
			display: flex;
			align-items: center;
			justify-content: space-between;
		`;
		header.setAttribute("style", headerStyles);

		const title = document.createElement("h2");
		const titleStyles = `
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
			color: #303133;
			margin: 0;
		`;
		title.textContent = this.title;
		title.setAttribute("style", titleStyles);
		header.append(title);

		const closeBtn = document.createElement("div");
		const closeBtnStyles = `
			cursor: pointer;
			font-size: 12px;
		`;
		closeBtn.textContent = "╳";
		closeBtn.setAttribute("style", closeBtnStyles);

		closeBtn.addEventListener("click", () => {
			this.onCancel?.();
		});

		header.append(closeBtn)

		const description = document.createElement("p");
		const descriptionStyles = `
      margin-top: 16px;
      font-size: 13px;
    `;
		description.textContent = this.description;
		description.setAttribute("style", descriptionStyles);
		this.__container.append(description);

		const buttonRow = document.createElement("div");
		const buttonRowStyles = `
			display: flex;
			flex-direction: row;
			justify-content: end;
		`;
		buttonRow.setAttribute("class", "btn-row");
		buttonRow.setAttribute("style", buttonRowStyles);

		const confirmBtn = document.createElement("button");
		const confirmBtnStyles = `
      cursor: pointer;
      font-size: 12px;
      background-color: #eee;
      padding: 6px 16px;
      border-radius: 8px;
      margin-top: 8px;
    `;
		confirmBtn.textContent = this.confirmText;
		confirmBtn.setAttribute("style", confirmBtnStyles);

		confirmBtn.addEventListener("click", () => {
			this.onConfirm?.();
		});

		buttonRow.append(confirmBtn);

		dialog.append(header);
		dialog.append(description);
		dialog.append(buttonRow);
	}

	mount() {
		document.body.append(this.__container);
	}

	unmount() {
		this.__container.remove();
	}
}
