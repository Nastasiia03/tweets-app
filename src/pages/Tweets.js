import { Layout } from "components/Layout";
import { fetchUsers } from "redux/operations";
import { UsersList } from "components/UsersList/UsersList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError, selectUsers } from "redux/selectors";
import { useState} from "react";
import { Link } from "react-router-dom";
import { LoadButton } from "components/LoadButton/LoadButton";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { GoBackButton } from "components/GoBackButton/GoBackButton";
import { Loader } from "components/Loader/Loader";

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
  
  const showLoadMore = users.length > 0 && users.length < 15;
  
    return <Layout>
      {isLoading && !error && <Loader/>}
      {!isLoading && <><GoBackButton><Link to="/" style={{ textDecoration: "none" }}>Go back</Link></GoBackButton>
      <StatusFilter/>
      <UsersList users={users} />
      {showLoadMore && <LoadButton onLoad={loadMore} />}</>}
        </Layout>
}

export default Tweets;