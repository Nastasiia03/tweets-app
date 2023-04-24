import { Avatar, Button, Card, Circle, Image, Line, Logo, Text, UserInfo } from "./UserCard.styled";
import img from "./bgpicture.png";
import logo from './Logo.png';
// import avatar from "./Hansel.png";

export const UserCard = ({user: {user, tweets, followers, avatar}}) => {
    return <Card>
        <Logo src={logo} />
        <Image src={img} alt="" />
        <Circle><Avatar src={avatar} alt={user} /></Circle>
        <Line />
        <UserInfo>
            <Text>{tweets} tweets</Text>
            <Text>{followers} followers</Text>
        </UserInfo>
        <Button>follow</Button>
    </Card>; 
}