import { Card, Image } from "./UserCard.styled";
import Img from "./bgpicture.png";

export const UserCard = () => {
    return <Card>
        <Image src={Img} alt=""/>
    </Card>; 
}