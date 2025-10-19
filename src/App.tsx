import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';


import './less/common/main.less';

function App() {
	return (
		<main itemScope itemType="https://schema.org/WebPage">
			<meta itemProp="name" content="Quant VPN — квантовая защита данных" />
			<meta itemProp="inLanguage" content="ru" />
			<meta itemProp="copyrightYear" content="2025" />
			<meta itemProp="publisher" content="Quant VPN Team" />
			
			<Header />
			<Intro />
			<Features />
			<About />
		</main>
	);
}

export default App;
