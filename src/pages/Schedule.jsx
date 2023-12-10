import React, { useState, useEffect } from 'react';
import './schedule.css';
import Card from '../components/Card';

function Schedule() {
    const filterList = [
        {
            _id: 1,
            name: "All",
            active: true,
        },
        {
            _id: 2,
            name: "Romance",
            active: false,
        },
        {
            _id: 3,
            name: "Action",
            active: false,
        },
        {
            _id: 4,
            name: "Thriller",
            active: false,
        },
        {
            _id: 5,
            name: "Horror",
            active: false,
        },
        {
            _id: 6,
            name: "Adventure",
            active: false,
        },
    ];

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);

    const [filters, setFilters] = useState(filterList);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data/movieData.json');
                const data = await response.json();
                setMovies(data);
                setData(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    const handleFilterMovies = (category) => {
        setFilters((prevFilters) =>
            prevFilters.map((filter) => ({
                ...filter,
                active: filter.name === category,
            }))
        );

        if (category === 'All') {
            setMovies(data);
        } else {
            setMovies(data.filter((movie) => movie.category === category));
        }
    };


    return (
        <section id="schedule" className="schedule">
            <div className="container-fluid">
                <div className="row">
                    <h4 className='section-title'>Movies</h4>
                </div>
                <div className="row">
                    <ul className="filters">
                        {
                            filters.map(filter => (
                                <li key={filter._id}
                                    className={`${filter.active ? 'active' : undefined}`}
                                    onClick={() => {
                                        handleFilterMovies(filter.name);
                                    }}>
                                    {filter.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="row mt-5">
                    {movies &&
                        movies.length > 0 &&
                        movies.map(movie => <Card key={movie._id} movie={movie} />)}
                </div>
            </div>

        </section>
    )
}

export default Schedule;