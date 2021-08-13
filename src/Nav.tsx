import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { RootStateOrAny, useSelector } from 'react-redux';

const Nav = () => {
    const movies = useSelector((state: RootStateOrAny) => state.movieReducer);
    const users = useSelector((state: RootStateOrAny) => state.userReducer.users);

    return (
        <div className="nav">
            <Link href="/users" passHref>
                <Button size="lg">
                    USERS <span>{users.length}</span>
                </Button>
            </Link>
            <Link href="/" passHref>
                <Button size="lg">
                    MOVIES <span>{movies.length}</span>
                </Button>
            </Link>
            <Link href="/add-movie" passHref>
                <Button size="lg">ADD MOVIE</Button>
            </Link>
        </div>
    );
};

export default Nav;
