import { UserCard } from "components/UserCard/UserCard";
import { List } from "./UsersList.styled";
import { selectVisibleUsers } from "redux/selectors";
import { useSelector } from "react-redux";


export const UsersList = () => {

const users = useSelector(selectVisibleUsers);
    
    return (
        <>
        <List>
            {users.map(user => (<UserCard user={user} key={user.id} />))}
        </List>
        </>
  )  
}