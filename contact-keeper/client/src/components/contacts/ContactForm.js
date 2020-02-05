import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        id=''
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        id=''
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone'
        id=''
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        id=''
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        id=''
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value='Add to Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
