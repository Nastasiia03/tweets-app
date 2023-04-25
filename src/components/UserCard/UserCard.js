import { Avatar, Button, Card, Circle, Image, Line, Logo, Text, UserInfo } from "./UserCard.styled";
import img from "./bgpicture.png";
import logo from './Logo.png';
import { useDispatch } from "react-redux";
import { updateUsers } from "redux/operations";




export const UserCard = ({ user: { user, tweets, followers, avatar, id, following } }) => {
    const dispatch = useDispatch();
    
    const handleUpdate = () => {
dispatch(updateUsers({id, followers, following}))
    }

    return <Card>
        <Logo src={logo} />
        <Image src={img} alt="" />
        <Circle><Avatar src={avatar} alt={user} /></Circle>
        <Line />
        <UserInfo>
            <Text>{tweets} tweets</Text>
            <Text>{followers} followers</Text>
        </UserInfo>
        {!following ? <Button type="submit" onClick={handleUpdate}>follow</Button>
        : <Button type="submit" onClick={handleUpdate} style={{ backgroundColor: "#5CD3A8" }}>following</Button>}
    </Card>; 
}