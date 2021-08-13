import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../redux/actions/movieActions';

export default function Home() {
    const movies = useSelector((state: RootStateOrAny) => state.movieReducer);
    const dispatch = useDispatch();

    const handleRemoveItem = (e: any) => {
        const name = e.target.getAttribute('data-name');
        dispatch(removeMovie(name));
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Movies Shop</title>
                <meta name="description" content="Movies shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ul>
                {movies.map((movie: any, index: any) => {
                    return (
                        <li className={styles.card} key={index}>
                            <span data-name={movie.name} onClick={handleRemoveItem}>
                                Delete
                            </span>
                            <p>{movie.name}</p>
                            <p>{movie.price}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
