import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/userActions';

interface OwnProps {
    users: any;
    loading: boolean;
    error: string;
    fetchUsers: any;
}

const Users = ({ users, loading, error, fetchUsers }: OwnProps) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Users</title>
                <meta name="description" content="Users" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {loading ? (
                <h2>Loading</h2>
            ) : (
                <>
                    {error ? (
                        <h2>Error: {error}</h2>
                    ) : (
                        <>
                            <h2>User List</h2>
                            <ol>
                                {users &&
                                    users.map((user: any, index: any) => {
                                        return <li key={index}>{user.name}</li>;
                                    })}
                            </ol>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
        loading: state.userReducer.loading,
        error: state.userReducer.error,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
