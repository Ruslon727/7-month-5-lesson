import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NowPlaying, Popular, TopRated, Upcoming } from '../pages'
import { PATH } from '../hook/usePath'

function CustomRoutes() {
    return (
        <Routes>
            <Route path={PATH.home} element={<NowPlaying />} />
            <Route path={PATH.popular} element={<Popular />} />
            <Route path={PATH.topRated} element={<TopRated />} />
            <Route path={PATH.upcoming} element={<Upcoming />} />
        </Routes>
    )
}

export default CustomRoutes