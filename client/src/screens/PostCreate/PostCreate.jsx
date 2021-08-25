import { useState } from 'react';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    link_url: '',
    description: ''
  });
  const { name, img_url, link_url, description } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Post</h3>
      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type='text' name='img_url' value={img_url} onChange={handleChange} />
      </label>
      <label>
        Link URL to Website (optional):
        <input type='text' name='link_url' value={link_url} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type='text' name='description' value={description} onChange={handleChange} />
      </label>
      <button>Submit</button>
      </form>
      </section>
  );
}
