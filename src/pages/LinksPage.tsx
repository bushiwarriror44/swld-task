import React from 'react';
import Navigation from '../components/Navigation';
import LinkManager from '../components/LinkManager';

const LinksPage: React.FC = () => {
	return (
		<div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
			<Navigation />

			<main style={{ padding: '2rem' }}>
				<div style={{ maxWidth: '800px', margin: '0 auto' }}>
					<div
						style={{
							backgroundColor: '#fff',
							padding: '2rem',
							borderRadius: '12px',
							boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
							marginBottom: '2rem',
						}}>
						<h2 style={{ marginTop: 0, color: '#333' }}>Zustand Store для ссылок</h2>
						<p style={{ color: '#666', lineHeight: '1.6' }}>
							Эта страница демонстрирует использование Zustand для централизованного управления href
							ссылками в приложении. Вы можете изменять ссылки в реальном времени и видеть, как
							изменения отражаются во всех компонентах приложения.
						</p>
					</div>

					<LinkManager />
				</div>
			</main>

			
		</div>
	);
};

export default LinksPage;
