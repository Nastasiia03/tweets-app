import { Link } from 'react-router-dom';
import { AppBar } from './Navigation.styled';

export const AppNav = () => {
    return <AppBar>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
    </AppBar>
}