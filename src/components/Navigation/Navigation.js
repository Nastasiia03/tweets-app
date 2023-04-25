import { Link } from 'react-router-dom';
import { AppBar, LinkName } from './Navigation.styled';

export const AppNav = () => {
    return <AppBar>
        <Link to="/" style={{ textDecoration: "none" }}><LinkName>Home</LinkName></Link>
        <Link to="/tweets" style={{ textDecoration: "none" }}><LinkName>Tweets</LinkName></Link>
    </AppBar>
}