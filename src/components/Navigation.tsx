import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLinksStore } from '../store/linksStore';

const Navigation: React.FC = () => {
	const location = useLocation();
	const { links } = useLinksStore();

	const isActive = (path: string) => {
		return location.pathname === path;
	};

	return (
		<nav
			style={{
				backgroundColor: '#fff',
				padding: '1rem 2rem',
				borderBottom: '1px solid #e0e0e0',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				position: 'sticky',
				top: 0,
				zIndex: 1000,
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					maxWidth: '1200px',
					margin: '0 auto',
				}}>
				{/* Логотип */}
				<Link
					to={links.home}
					style={{
						textDecoration: 'none',
						color: '#183B8B',
						fontWeight: 'bold',
						fontSize: '1.2rem',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}>
					<img src="/src/assets/img/header/logo.svg" alt="Quant VPN" style={{ height: '32px' }} />
					<span>Quant VPN</span>
				</Link>


				<div
					style={{
						display: 'flex',
						gap: '2rem',
						alignItems: 'center',
					}}>
					<Link
						to={links.home}
						style={{
							textDecoration: 'none',
							color: isActive(links.home) ? '#183B8B' : '#666',
							fontWeight: isActive(links.home) ? '600' : '400',
							padding: '0.5rem 1rem',
							borderRadius: '4px',
							transition: 'all 0.2s',
						}}>
						Главная
					</Link>

					<Link
						to="/links"
						style={{
							textDecoration: 'none',
							color: isActive('/links') ? '#183B8B' : '#666',
							fontWeight: isActive('/links') ? '600' : '400',
							padding: '0.5rem 1rem',
							borderRadius: '4px',
							transition: 'all 0.2s',
						}}>
						Управление ссылками
					</Link>

					
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
