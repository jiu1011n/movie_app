import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Data
import { dummy } from './dummy';

// Pages
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import Tv from './pages/Tv';
import NotFound from './pages/NotFound';
import Movie from './pages/Movies';
import MovieDetail from './pages/MovieDetail';

// Style
import './App.css';
import Header from './components/Header';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function App() {
    return (
        <div className='root-wrap'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/movie/:title" element={<MovieDetail />} />

                    <Route path="/person" element={<Celebrity />} />
                    <Route path="/tv" element={<Tv />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>


        // <div className='container'>
        //   <div className='app-content'>
        //     {
        //       dummy.results.map((item) => (
        //         <Movie poster_path={item.poster_path} title={item.title} vote_average={item.vote_average} />
        //       ))
        //     }
        //   </div>
        // </div>
    );
}

export default App;
