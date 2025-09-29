// components/AddBookForm.jsx
import React, { useState } from 'react';

const AddBookForm = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    coverUrl: '',
    available: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/books/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error('Failed to add book');
      }

      const data = await res.json();
      alert('✅ Book added successfully!');
      console.log(data);
    } catch (error) {
      alert('❌ Error adding book');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="coverUrl" placeholder="Cover URL" onChange={handleChange} />
      <label>
        <input
          type="checkbox"
          name="available"
          checked={form.available}
          onChange={handleChange}
        />{' '}
        Available
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    margin: 'auto'
  }
};

export default AddBookForm;
