import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, LinksPage } from './pages';

import './less/common/main.less';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/links" element={<LinksPage />} />
			</Routes>
		</Router>
	);
}

export default App;
