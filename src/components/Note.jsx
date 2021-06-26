import { useDispatch } from "react-redux";
import moment from 'moment';
import { deleteNote, toggleFavoriteNote } from "store/actions/noteAction";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = note => {
    dispatch(deleteNote(note))
  }
  const toggleFavoriteHandler = note => {
    dispatch(toggleFavoriteNote(note))
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
      <h5 className="black-text">{ note.title }</h5>
      <p className="truncate">{ note.content }</p>
      <p className="grey-text">{ moment(note.createdAt.toDate()).fromNow() }</p>
      <div className="right-align">
        <i className="material-icons black-text" style={{ cursor: 'pointer' }}>edit</i>
      </div>
    </div>
  )
}

export default Note;