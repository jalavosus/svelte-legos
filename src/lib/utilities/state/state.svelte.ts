
type Nullable<T> = T | null;

type StateVariable<T> = {
	get value(): Nullable<T>;
	setValue(value: Nullable<T>): void;
}

export function createStateVariable<T>(val?: T): StateVariable<T> {
	let state: Nullable<T> = $state(val ? val : null);
	
	return {
		get value() { return state; },
		setValue: (value: Nullable<T>) => { state = value },
	}
}