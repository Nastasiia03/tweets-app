import { useSelector } from "react-redux";
import { UserCard } from "components/UserCard/UserCard";
import { selectUsers } from "redux/selectors";
import { List } from "./UsersList.styled";

export const UsersList = () => {
    const users = useSelector(selectUsers);
    

    return (
        <List>
            {users.map(user => (<UserCard user={user} key={user.id} />))}
      </List>
  )  
}