declare namespace svelteHTML {
	interface HTMLAttributes {
		'on:longpress'?: (event: any) => void;
		'on:dragMove'?: (event: any) => void;
	}
}
