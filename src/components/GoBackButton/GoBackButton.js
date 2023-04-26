import { BackButton } from "./GoBackButton.styled";
import PropTypes from "prop-types";

export const GoBackButton = ({children}) => {
    return <BackButton type="button">{children}</BackButton>
}

GoBackButton.propTypes = {
  children: PropTypes.node,
};