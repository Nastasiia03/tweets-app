import { Avatar, Button, Card, Circle, Image, Line, Logo, Text, UserInfo } from "./UserCard.styled";
import img from "./bgpicture.png";
import logo from './Logo.png';
import { useDispatch } from "react-redux";
import { updateUsers } from "redux/operations";



export const UserCard = ({ user: { user, tweets, followers, avatar, id } }) => {
    const dispatch = useDispatch();

    return <Card>
        <Logo src={logo} />
        <Image src={img} alt="" />
        <Circle><Avatar src={avatar} alt={user} /></Circle>
        <Line />
        <UserInfo>
            <Text>{tweets} tweets</Text>
            <Text>{followers} followers</Text>
        </UserInfo>
        <Button type="submit" onClick={() => dispatch(updateUsers({id, followers}))}>follow</Button>
    </Card>; 
}