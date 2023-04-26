import { Content, Image, MainTitle, Text } from "./Main.styled";
import ideaImage from './idea.png';

export const Main = () => {
    return <Content>
        <MainTitle>Welcome to Tweets -</MainTitle>
        <Text>collection of interesting thoughts</Text>
        <Image src={ideaImage} alt="Background Image"/>
</Content>
}