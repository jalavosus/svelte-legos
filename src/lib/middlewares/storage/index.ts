import { isClient } from "$lib/shared";
import { get, type Updater, type Writable } from "svelte/store";

// eslint-disable-file  @typescript-eslint/no-unused-vars

export function storage<T>(store: Writable<T>, key: string, type: "Map" | "other" = "other") {
	if (!key || key.trim() === "") {
		console.warn("Local storage key not provided or invalid!");
	}

	function loadFromStorage() {
		if (isClient) {
			let valueStr;
			try {
				valueStr = localStorage.getItem(key);
				if (valueStr !== null) {
					const json = JSON.parse(valueStr);
					if (type === "Map") {
						// @ts-ignore _wat_
						store.set(new Map(Object.entries(json)));
					} else {
						store.set(json);
					}
				}
			} catch (e) {
				console.error(e);
				if (valueStr === "") {
					// @ts-ignore _wat_
					store.set("");
				}
				// probably it was a primitive
				else {
					if (valueStr === "false" || valueStr === "true") {
						// boolean state
						// @ts-ignore _wat_
						store.set(valueStr !== "false");
					} else if (!Number.isNaN(Number(valueStr))) {
						// @ts-ignore _wat_
						store.set(Number(valueStr));
					} else {
						// @ts-ignore _wat_
						store.set(valueStr);
					}
				}
			}
		}
	}

	function saveToStorage(value: T) {
		if (isClient) {
			if (typeof value === "boolean" || typeof value === "number" || typeof value === "string") {
				localStorage.setItem(key, value.toString());
			} else if (typeof value === "object") {
				if (value instanceof Map) {
					localStorage.setItem(key, JSON.stringify(Object.fromEntries(value)));
				} else {
					localStorage.setItem(key, JSON.stringify(value));
				}
			}
		}
	}

	function set(value: T) {
		saveToStorage(value);
		store.set(value);
	}

	function update(fn: Updater<T>) {
		const value = fn(get(store));
		saveToStorage(value);
		store.update(fn);
	}

	loadFromStorage();

	return {
		subscribe: store.subscribe,
		set,
		update
	};
}
