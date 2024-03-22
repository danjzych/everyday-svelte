export default function dragAndDrop(node: HTMLElement) {
	let offset: { x: number; y: number };

	function handleMouseDown(evt: MouseEvent) {
		const rect = node.getBoundingClientRect();
		offset = { x: evt.clientX - rect.left, y: evt.clientY - rect.y };

		node.addEventListener('mousemove', handleMouseMove);
		node.addEventListener('mouseout', handleMouseOut);
		node.addEventListener('mouseup', handleMouseUp);
	}

	function handleMouseMove(evt: MouseEvent) {
		node.dispatchEvent(
			new CustomEvent('dragMove', {
				detail: {
					x: evt.clientX - offset.x,
					y: evt.clientY - offset.y
				}
			})
		);
	}

	function handleMouseOut() {
		node.removeEventListener('mousemove', handleMouseMove);
		node.removeEventListener('mouseup', handleMouseUp);
	}

	function handleMouseUp() {
		node.removeEventListener('mousemove', handleMouseMove);
		node.removeEventListener('mouseup', handleMouseUp);
	}

	node.addEventListener('mousedown', handleMouseDown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseout', handleMouseOut);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
