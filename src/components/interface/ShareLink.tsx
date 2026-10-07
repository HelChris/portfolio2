import { useState } from 'react';

export function ShareLink() {
	const [copied, setCopied] = useState(false);

	async function copyPageLink() {
		await navigator.clipboard.writeText(window.location.href);
		setCopied(true);
	}

	return (
		<button className="button" type="button" onClick={copyPageLink}>
			{copied ? 'Link copied' : 'Copy page link'}
		</button>
	);
}
