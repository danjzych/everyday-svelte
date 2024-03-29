export default function debounce(cb: Function, delay: number) {
	let debounceTimeoutId: number;

	return function (...args: any) {
		if (debounceTimeoutId) clearTimeout(debounceTimeoutId);

		debounceTimeoutId = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}
