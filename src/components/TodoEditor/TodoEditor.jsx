import { useState } from 'react';

export const TodoEditor = () => {
  const [message, setMessage] = useState('');
  const handleChange = e => {
    setMessage(e.currentTarget.value);
    // this.setState({ message: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // this.props.onSubmit(this.state.message);
    setMessage('');
  };
  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit">Save</button>
    </form>
  );
};
