import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiUserAddLine } from 'react-icons/ri';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { addContact } from 'redux/contacts/operations.js';
import { selectContacts } from 'redux/contacts/selectors.js';
import {
  DataInput,
  Form,
  Icon,
  IconWrapper,
  Wrapper,
  SubmitButton,
  Label,
} from './ContactForm.styled';

const notifyOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number. The number must start with a plus sign and contain valid digits and separators'
    )
    .required('Number is required'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const addContacts = contact => {
    const existingContact = contacts.find(({ name }) => name === contact.name);

    if (existingContact) {
      toast.error(`${contact.name} is already in contacts`, notifyOptions);
      return;
    }
    dispatch(addContact(contact));
    setFormErrors({});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await schema.validate({ name, number }, { abortEarly: false });
      const contact = {
        id: nanoid(10),
        name,
        number,
      };
      addContacts(contact);
      clearForm();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach(err => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      }
      console.log(error.message);
    }
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} validationSchema={schema}>
        <Label>
          <IconWrapper top="18px" left="152px">
            <IoMdPersonAdd size="16" />
          </IconWrapper>
          Name
          <DataInput
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <IconWrapper top="143px" left="140px">
            <BsFillTelephoneFill size="16" />
          </IconWrapper>
          Number
          <DataInput
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
        <SubmitButton type="submit">
          <Icon>
            <RiUserAddLine size="16" />
          </Icon>
          Add contact
        </SubmitButton>
      </Form>
      {Object.keys(formErrors).length > 0 && (
        <div>
          {Object.values(formErrors).map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Wrapper>
  );
}

export default ContactForm;
