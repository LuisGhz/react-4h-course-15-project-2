import useInput from 'customHook/useInput'

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();

  return (
    <div className="section">
      <form>
        <h5 className="grey-text">New note </h5>
          <div className="input-field">
            <input value="Alvin" id="first_name2" type="text" className="validate" />
            <label className="active" for="first_name2">Note Title</label>
          </div>
          <div className="input-field">
            <textarea id="note-content" className="materialize-textarea" ></textarea>
            <label for="note-content">Note Content</label>
          </div>
      </form>
    </div>
  )
}

export default Form;