import { useSelector, useDispatch } from 'react-redux';
import {useHistory  } from 'react-router-dom'
import { editNote } from 'store/actions/noteAction';
import useInput from 'customHook/useInput';

const EditForm = () => {
  const note = useSelector(state => state.note);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editNote({ id: note.id, title, content }));
    resetTitle();
    resetContent();
    history.push('/');
  }

  return (
    <div className="section">
      <form  onSubmit={ handleSubmit } className="white" >
        <h5 className="grey-text text-darken-3">Edit note note </h5>
          <div className="input-field">
            <input id="note-title" type="text" className="validate" { ...bindTitle } />
            <label className="active" htmlFor="note-title">Note Title</label>
          </div>
          <div className="input-field">
            <textarea id="note-content" className="materialize-textarea" { ...bindContent } ></textarea>
            <label className="active" htmlFor="note-content">Note Content</label>
          </div>
          <button className="btn green">Edit note</button>
      </form>
    </div>
  );
}

export default EditForm;