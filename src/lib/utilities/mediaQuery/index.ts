import { defaultWindow } from "$lib/shared";
import { readable } from "svelte/store";

export function mediaQuery(query: string) {
	return readable(false, (set) => {
		const window = defaultWindow;
		const isSupported = window && "matchMedia" in window && typeof window.matchMedia === "function";

		let mediaQuery: MediaQueryList | undefined;

		function cleanup() {
			if (!mediaQuery) return;
			if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", update);
			// @ts-expect-error deprecated API
			else mediaQuery.removeListener(update);
		}

		function update() {
			if (!isSupported) return;

			cleanup();

			mediaQuery = window!.matchMedia(query);
			set(mediaQuery.matches);

			if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", update);
			// @ts-expect-error deprecated API
			else mediaQuery.addListener(update);
		}

		update();

		return cleanup;
	});
}
