import { Layout } from "components/Layout";
import { fetchUsers } from "redux/operations";
import { UsersList } from "components/UsersList/UsersList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError, selectUsers } from "redux/selectors";
import { useState } from "react";
import { LoadButton } from "components/LoadButton/LoadButton";


const Tweets = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const users = useSelector(selectUsers);
  

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers(page));
  }  
}, [dispatch, page, users.length]);
  
   
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    dispatch(fetchUsers(page+1));
  };
  
  
    return <Layout>
        {isLoading && !error && <b>Request in progress...</b>}
      <UsersList users={users} />
       <LoadButton onLoad={loadMore} />
        </Layout>
}

export default Tweets;