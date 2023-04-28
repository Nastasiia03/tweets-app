import { Avatar, Button, Card, Circle, Line, Logo, Text, UserInfo } from "./UserCard.styled";
import logo from './Logo.png';
import { useDispatch } from "react-redux";
import { updateUsers } from "redux/operations";
import PropTypes from "prop-types";


export const UserCard = ({ user: { user, tweets, followers, avatar, id, following } }) => {
    const dispatch = useDispatch();
    
    const handleUpdate = () => {
        dispatch(updateUsers({ id, followers, following }))
    };

    
    return <Card>
        <Logo src={logo} alt="GOIT logo" />
        <Circle><Avatar src={avatar} alt={user} /></Circle>
        <Line />
        <UserInfo>
            <Text>{tweets} tweets</Text>
            <Text>{followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers</Text>
        </UserInfo>
        {!following ? <Button type="submit" onClick={handleUpdate}>follow</Button>
            : <Button type="submit" onClick={handleUpdate} style={{ backgroundColor: "#5CD3A8" }}>following</Button>}
    </Card>;
};

UserCard.propTypes = {
    user: PropTypes.shape({
        user: PropTypes.string.isRequired,
        tweets: PropTypes.number.isRequired, 
        followers: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        following: PropTypes.bool.isRequired
    }).isRequired
}