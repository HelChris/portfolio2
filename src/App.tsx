import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Home from './pages/Home';
import ReadersRealm from './pages/ReadersRealm';
import SpiritBid from './pages/SpiritBid';
import HelTech from './pages/HelTech';

function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        const sectionId = decodeURIComponent(hash.slice(1));
        requestAnimationFrame(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }, [hash]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="readersrealm" element={<ReadersRealm />} />
                    <Route path="spiritbid" element={<SpiritBid />} />
                    <Route path="heltech" element={<HelTech />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
