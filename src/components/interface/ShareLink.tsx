import { useState } from 'react';

export function ShareLink() {
	const [copied, setCopied] = useState(false);

	async function copyPageLink() {
		await navigator.clipboard.writeText(window.location.href);
		setCopied(true);
	}

	return (
		<button className="button" type="button" onClick={copyPageLink}>
			{copied ? 'Url copied' : 'Share'}
			<img
				src="https://img.icons8.com/ios-filled/50/124f4b/copy-link.png"
				alt=""
				width="18"
				height="18"
				aria-hidden="true"
				className="ml-2"
			/>
		</button>
	);
}
