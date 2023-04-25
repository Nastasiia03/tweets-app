import { Button } from "components/UserCard/UserCard.styled";
import PropTypes from "prop-types";

export const LoadButton = ({ onLoad }) => {
    return <Button type="button" onClick={onLoad}>load more</Button>
}

LoadButton.propTypes = {
onLoad: PropTypes.func.isRequired,
}