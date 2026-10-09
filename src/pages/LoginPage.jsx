import { useState } from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<main style={styles.page}>
			<section style={styles.card} aria-labelledby="login-title">
				<h1 id="login-title" style={styles.title}>Welcome back</h1>
				<p style={styles.subtitle}>Sign in to your account</p>

				<form onSubmit={handleSubmit} style={styles.form}>
					<label htmlFor="email" style={styles.label}>Email address</label>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="you@example.com"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						required
						style={styles.input}
					/>

					<label htmlFor="password" style={styles.label}>Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autoComplete="current-password"
						placeholder="Enter your password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						required
						style={styles.input}
					/>

					<button type="submit" style={styles.button}>Sign in</button>
				</form>
			</section>
		</main>
	);
}

const styles = {
	page: {
		minHeight: '100vh',
		display: 'grid',
		placeItems: 'center',
		padding: '24px',
		boxSizing: 'border-box',
		background: '#f3f4f6',
		fontFamily: 'Arial, sans-serif',
	},
	card: {
		width: '100%',
		maxWidth: '400px',
		padding: '32px',
		boxSizing: 'border-box',
		background: '#fff',
		borderRadius: '12px',
		boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
	},
	title: { margin: '0 0 8px', color: '#111827', fontSize: '28px' },
	subtitle: { margin: '0 0 24px', color: '#6b7280' },
	form: { display: 'flex', flexDirection: 'column', gap: '12px' },
	label: { color: '#374151', fontSize: '14px', fontWeight: 600 },
	input: {
		width: '100%',
		boxSizing: 'border-box',
		padding: '12px',
		border: '1px solid #d1d5db',
		borderRadius: '6px',
		fontSize: '16px',
	},
	button: {
		marginTop: '8px',
		padding: '12px',
		border: 0,
		borderRadius: '6px',
		background: '#2563eb',
		color: '#fff',
		fontSize: '16px',
		fontWeight: 600,
		cursor: 'pointer',
	},
};
