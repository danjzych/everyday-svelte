export default function longPress(node: HTMLElement, delay: number) {
	let timer: number; //timerId, no specific type

	function handleMouseDown() {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, delay);
	}
	function handleMouseUp() {
		clearTimeout(timer);
	}

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
