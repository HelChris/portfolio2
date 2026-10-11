import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Home from './pages/Home';
import Project from './pages/Project';

function ScrollToHash() {
    const { hash, pathname } = useLocation();

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
    }, [hash, pathname]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="readersrealm" element={<Project />} />
                    <Route path="spiritbid" element={<Project />} />
                    <Route path="heltech" element={<Project />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
