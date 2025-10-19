import React from 'react';
import { useLinksStore } from '../store/linksStore';

const LinkManager: React.FC = () => {
	const { links, updateLink, updateMultipleLinks, resetLinks } = useLinksStore();

	const handleLinkUpdate = (key: keyof typeof links, value: string) => {
		updateLink(key, value);
	};

	const handleBulkUpdate = () => {
		updateMultipleLinks({
			home: '/home',
			download: '/download-app',
			support: '/contact-support',
			features: '/our-features',
			about: '/about-us',
		});
	};

	return (
		<div
			style={{
				padding: '20px',
				border: '1px solid #ccc',
				margin: '20px',
				borderRadius: '8px',
				backgroundColor: '#f9f9f9',
			}}>
			<h3>Управление ссылками через Zustand</h3>

			<div style={{ marginBottom: '20px' }}>
				<h4>Текущие ссылки:</h4>
				<ul>
					{Object.entries(links).map(([key, value]) => (
						<li key={key}>
							<strong>{key}:</strong> {value}
						</li>
					))}
				</ul>
			</div>

			<div style={{ marginBottom: '20px' }}>
				<h4>Обновить отдельные ссылки:</h4>
				{Object.keys(links).map((key) => (
					<div key={key} style={{ marginBottom: '10px' }}>
						<label htmlFor={key} style={{ display: 'block', marginBottom: '5px' }}>
							{key}:
						</label>
						<input
							id={key}
							type="text"
							value={links[key as keyof typeof links]}
							onChange={(e) => handleLinkUpdate(key as keyof typeof links, e.target.value)}
							style={{ width: '200px', padding: '5px' }}
						/>
					</div>
				))}
			</div>

			<div style={{ marginBottom: '20px' }}>
				<button
					onClick={handleBulkUpdate}
					style={{
						padding: '10px 20px',
						marginRight: '10px',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}>
					Обновить все ссылки
				</button>

				<button
					onClick={resetLinks}
					style={{
						padding: '10px 20px',
						backgroundColor: '#6c757d',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}>
					Сбросить к значениям по умолчанию
				</button>
			</div>

			
		</div>
	);
};

export default LinkManager;
