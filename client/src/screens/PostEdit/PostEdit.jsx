import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    link_url: '',
    description: ''
  })
  const {posts, handleUpdate} = props;
  const {id} = useParams();


  return (
    <section>
    <div className="newPostContainer">
    <div className="postTitle">{formData.name}</div>
    <img className="postIMG" src={formData.img_url} alt={formData.name} />
    <div className="postLink">{formData.link_url}</div>
    <div className="postDesc">{formData.description}</div>
    </div>
  <br />
    <form
    onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
      >
<label>
        Name:
        <input type='text' name='name' value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type='text' name='img_url' value={formData.img_url} onChange={handleChange} />
      </label>
      <label>
        Link URL to Website (optional):
        <input type='text' name='link_url' value={formData.link_url} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type='text' name='description' value={formData.description} onChange={handleChange} />
      </label>
      <button>Submit</button>
      </form>
      </section>
  )
}
