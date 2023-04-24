import { Layout } from "components/Layout";
import { fetchUsers } from "redux/operations";
import { UsersList } from "components/UsersList/UsersList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";

const Tweets = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading); 
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  
    
    return <Layout>
        {isLoading && !error && <b>Request in progress...</b>}
        <><UsersList /></>
        </Layout>
}

export default Tweets;