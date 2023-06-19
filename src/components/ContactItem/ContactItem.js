import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/contactsSlice';
import {
  ContactData,
  ContactItemWrapper,
  ContactName,
  DeleteButton,
  DeleteIcon,
  FirstLetterBox,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number, randomColor }) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal(id));

  return (
    <ContactItemWrapper>
      <ContactData>
        <FirstLetterBox style={{ background: `${randomColor}` }}>
          {name[0]}
        </FirstLetterBox>
        <ContactName>
          {name}: {number}
        </ContactName>
        <DeleteButton type="button" onClick={() => dispatch(handleToggleModal)}>
          Delete <DeleteIcon size="16" />
        </DeleteButton>
      </ContactData>
    </ContactItemWrapper>
  );
};

ContactItem.propTypes = {
  //   id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  randomColor: PropTypes.string,
};
