import { UserCard } from "components/UserCard/UserCard";
import { List } from "./UsersList.styled";


export const UsersList = ({users}) => {
    // const users = useSelector(selectUsers);
     
    
    return (
        <>
        <List>
            {users.map(user => (<UserCard user={user} key={user.id} />))}
        </List>
        </>
  )  
}