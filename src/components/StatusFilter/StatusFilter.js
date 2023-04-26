import { useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filterSlice";
import { FilterBar } from "./StatusFilter.styled";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export const StatusFilter = () => {
const dispatch = useDispatch();
  
const handleFilterChange = filter => dispatch(setStatusFilter(filter));
    

  return <FilterBar>
<Dropdown options={statusFilters} onChange={handleFilterChange} placeholder="Filter" />
    </FilterBar>
};
