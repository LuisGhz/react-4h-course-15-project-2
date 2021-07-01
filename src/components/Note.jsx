import { useDispatch } from "react-redux";
import moment from 'moment';
import { Link } from "react-router-dom";
import { deleteNote, toggleFavoriteNote } from "store/actions/noteAction";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = note => {
    dispatch(deleteNote(note))
  }
  const toggleFavoriteHandler = note => {
    dispatch(toggleFavoriteNote(note))
  }
  const editNoteHandler = () => {
    console.log(note)
    dispatch({ type: 'EDIT_NOTE', payload: note })
  }

  const favoriteMarkup = note.favorite ? 'favorite' : 'favorite_border';

  return (
    <div className="note white" >
      <div className="right-align">
        <i className="material-icons red-text" style={{ cursor: 'pointer' }} 
          onClick={ () => toggleFavoriteHandler(note) } >{ favoriteMarkup }</i>
        <i className="material-icons" style={{ cursor: 'pointer' }} 
          onClick={ () => deleteNoteHandler(note) } >delete</i>
      </div>
      <Link to={ `/note/${note.id}` } >
        <h5 className="black-text">{ note.title }</h5>
      </Link>
      <p className="truncate">{ note.content }</p>
      <p className="grey-text">{ moment(note.createdAt.toDate()).fromNow() }</p>
      <div className="right-align">
        <Link to={ `/edit-note/${ note.id }` } onClick={ editNoteHandler } >
          <i className="material-icons black-text" style={{ cursor: 'pointer' }} >edit</i>
        </Link>
      </div>
    </div>
  )
}

export default Note;