const obj: { [key: string]: any } = {};
export const clearDebounced = (name: string) => {
	clearTimeout(obj[name]);
	obj[name] = undefined;
};
export const debounceFunction = (func: () => void, timer: number, name: string) => {
	clearDebounced(name);
	obj[name] = setTimeout(() => {
		func();
	}, timer);
};
