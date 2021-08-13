import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { addMovie } from '../redux/actions/movieActions';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

    const addTitle = (e: any) => {
        setTitle(e.target.value);
    };
    const addPrice = (e: any) => {
        setPrice(e.target.value);
    };

    const submitMovie = (e: any) => {
        e.preventDefault();

        if (title !== '' && price !== '') {
            dispatch(addMovie(title, price));
            setTitle('');
            setPrice('');
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Add Movies</title>
                <meta name="description" content="Add Movies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form onSubmit={submitMovie}>
                <input type="text" placeholder="Title" value={title} onChange={addTitle} />
                <input type="number" placeholder="Price" value={price} onChange={addPrice} />
                <button type="submit">Add Movie</button>
            </form>
            <div className="buttons"></div>
        </div>
    );
};

export default AddMovie;
