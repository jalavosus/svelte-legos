import { error, info, success, warn } from "../../shared/icons";

export type MessageType = "success" | "error" | "info" | "warning";
export default class Message {
	message: string;
	type: MessageType;
	onUnmount?: () => void;

	private __container: HTMLDivElement;
	private __timer: ReturnType<typeof setTimeout> | undefined;

	constructor(message: string, type?: MessageType, onUnmount?: () => void) {
		this.message = message;
		this.type = type || "info";
		this.__container = document.createElement("div");
		this.onUnmount = onUnmount;
		this.init();
	}

	private init() {
		this.addStyles();
		this.addMessage();

		this.__timer = setTimeout(() => {
			this.hide();
		}, 4000);
	}

	show() {
		this.__container.style.setProperty("opacity", "1");
		this.__container.style.setProperty("transform", "translateY(0)");
	}

	hide() {
		const end = () => {
			this.__container.removeEventListener("transitionend", end);
			this.unmount();
		};
		requestAnimationFrame(() => {
			this.__container.addEventListener("transitionend", end);
			this.__container.style.setProperty("opacity", "0");
			this.__container.style.setProperty("transform", "translateY(-100%)");
		});
	}

	unmount() {
		this.__container.remove();
		if (this.onUnmount) this.onUnmount();
	}

	private addMessage() {
		const message = document.createElement("h2");
		const messageStyles = `
      font-size: 13px;
      margin: 0;
    `;
		message.textContent = this.message;
		message.setAttribute("style", messageStyles);

		const icon = document.createElement("img");
		const iconStyles = `
      width: 20px;
      height: 20px;
      margin-right: 8px;
    `;
		switch (this.type) {
			case "success":
				icon.setAttribute("src", success);
				break;
			case "error":
				icon.setAttribute("src", error);
				break;
			case "info":
				icon.setAttribute("src", info);
				break;
			case "warning":
				icon.setAttribute("src", warn);
				break;
		}
		icon.setAttribute("style", iconStyles);

		const closeBtn = document.createElement("div");
		const closeBtnStyles = `
        cursor: pointer;
        font-size: 12px;
      `;
		closeBtn.textContent = "╳";
		closeBtn.setAttribute("style", closeBtnStyles);

		closeBtn.addEventListener("click", () => {
			clearTimeout(this.__timer);
			this.hide();
		});

		this.__container.appendChild(icon);
		this.__container.appendChild(message);
	}

	mount(container: HTMLDivElement) {
		container.appendChild(this.__container);
	}

	private addStyles() {
		let typeBasedStyles = "";

		switch (this.type) {
			case "success":
				typeBasedStyles = `
          color: #67c23a;
          border-color: #e1f3d8;
          background-color: #f0f9eb;
        `;
				break;
			case "warning":
				typeBasedStyles = `
          color: #e6a23c;
          border-color: #faecd8;
          background-color: #fdf6ec;
        `;
				break;
			case "error":
				typeBasedStyles = `
          color: #f56c6c;
          border-color: #fde2e2;
          background-color: #fef0f0;
        `;
				break;
		}

		const styles = `
      padding: 12px;
      border-radius: 8px;
      box-sizing: border-box;
      border: 1px solid #ebeef5;
      background-color: #ffffff;
      transition: opacity .3s, transform .3s;
      overflow-wrap: anywhere;
      overflow: hidden;
      z-index: 9999;
      transform: translateY(-100%);
      pointer-events: all;
      margin-bottom: 16px;
      opacity: 0;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
      display: flex;

      ${typeBasedStyles}
    `;

		this.__container.setAttribute("style", styles);
	}
}
