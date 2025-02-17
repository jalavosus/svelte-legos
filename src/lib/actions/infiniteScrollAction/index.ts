export const CHECK_INTERVAL = 50;
export const DEFAULT_DELAY = 200;
export const DEFAULT_DISTANCE = 0;

/* this implementation is original ported from https://github.com/ElemeFE/vue-infinite-scroll */
interface InfiniteScrollActionParams {
	delay: number;
	distance: number;
	disabled: boolean;
	immediate: boolean;
	cb: Function; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
}

const defaultParams = {
	delay: DEFAULT_DELAY,
	distance: DEFAULT_DISTANCE,
	disabled: false,
	immediate: true,
	cb: () => {}
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function throttle(fn: Function, delay: number) {
	let now: number;
	let lastExec: number;
	let timer: ReturnType<typeof setTimeout> | null;

	const execute = () => {
		fn();
		lastExec = now;
	};

	return function () {
		now = Date.now();

		if (timer) {
			clearTimeout(timer);
			timer = null;
		}

		if (lastExec) {
			const diff = delay - (now - lastExec);
			if (diff < 0) {
				execute();
			} else {
				timer = setTimeout(() => {
					execute();
				}, diff);
			}
		} else {
			execute();
		}
	};
}

function getScrollTop<T extends Element>(element: T | Window) {
	if (element === window) {
		return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
	}

	return element.scrollTop;
}

function getScrollEventTarget(element: HTMLElement | null) {
	let currentNode = element;
	// bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
	while (
		currentNode &&
		currentNode.tagName !== "HTML" &&
		currentNode.tagName !== "BODY" &&
		currentNode.nodeType === 1
	) {
		const overflowY = getComputedStyle(currentNode).overflowY;
		if (overflowY === "scroll" || overflowY === "auto") {
			return currentNode;
		}
		currentNode = currentNode.parentElement;
	}
	return window;
}

function getVisibleHeight(element: HTMLElement | Window) {
	if (element === window) {
		return document.documentElement.clientHeight;
	}

	return element.clientHeight;
}

function getElementTop(element: HTMLElement | Window) {
	if (element === window) {
		return getScrollTop(window);
	}
	return element.getBoundingClientRect().top + getScrollTop(window);
}

function check(
	{
		disabled,
		scrollEventTarget,
		element,
		distance,
		cb
	}: InfiniteScrollActionParams & {
		element: HTMLElement;
		scrollEventTarget: HTMLElement | Window;
	},
	force?: boolean
) {
	if (force !== true && disabled) return;
	const viewportScrollTop = getScrollTop(scrollEventTarget);
	const viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);

	let shouldTrigger = false;
	if (scrollEventTarget === element) {
		shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
	} else {
		const elementBottom =
			getElementTop(element) -
			getElementTop(scrollEventTarget) +
			element.offsetHeight +
			viewportScrollTop;

		shouldTrigger = viewportBottom + distance >= elementBottom;
	}
	if (shouldTrigger && cb) {
		cb();
	}
}

export function infiniteScrollAction<T extends HTMLElement>(
	node: T,
	params: Partial<InfiniteScrollActionParams> = defaultParams
) {
	let stop: () => void;

	const destroy = () => {
		stop?.();
	};

	const update = (params: InfiniteScrollActionParams) => {
		destroy();
		const scrollEventTarget = getScrollEventTarget(node);
		const scrollEventListener = throttle(
			check.bind(null, { ...params, scrollEventTarget, element: node }),
			params.delay
		);
		document.addEventListener(scrollEventTarget, "scroll", scrollEventListener);
		if (params.immediate) {
			check({ ...params, scrollEventTarget, element: node });
		}

		stop = () => {
			document.removeEventListener(scrollEventTarget, "scroll", scrollEventListener);
		};
	};

	update({ ...defaultParams, ...params });

	return {
		update,
		destroy
	};
}
