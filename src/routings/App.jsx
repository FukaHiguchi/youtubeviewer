import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopPage from '~/components/pages/TopPage';
import PlayerPage from '~/components/pages/PlayerPage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact title="トップ" component={TopPage} />
            <Route path="/play/:videoId" title="動画再生" component={PlayerPage} />
            <Route path="*" component={NotFoundPage}/>
        </Routes>
    </BrowserRouter>
);

export default AppRouting;
