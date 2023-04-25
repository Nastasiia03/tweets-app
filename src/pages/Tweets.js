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
  const [cards, setCards] = useState([]);
  const tweets = useSelector(selectUsers);
  


  useEffect(() => {
    dispatch(fetchUsers(page))
      .then((response => {
        if (page === 1) {
          setCards(response.payload)
        } else {
          scrollLoadMore();
          setCards(prevCards=> [...prevCards, ...response.payload])
        }
      }));
    
}, [dispatch, page]);
  
   
  const loadMore = () => {
  setPage(prevPage => prevPage + 1)
  };
  
  const scrollLoadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  

 
  const showLoadMore = tweets.length >= 3;
    
    return <Layout>
        {isLoading && !error && <b>Request in progress...</b>}
      <UsersList users={cards} />
      {showLoadMore && <LoadButton onLoad={loadMore} />}
        </Layout>
}

export default Tweets;