import { ButtonLoad } from './Button.styled';
import propTypes from "prop-types";

function Button({ onBtnClick }) {
  return (
    <ButtonLoad onClick={onBtnClick}>
      Load more
    </ButtonLoad>
  );
}

ButtonLoad.propTypes = {
  onBtnClick: propTypes.func,
};

export default Button;