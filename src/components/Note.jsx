
const Note = ({ note }) => {
  return (
    <div className="note white" >
      <div className="right-align">
        <i className="material-icons red-text" style={{ cursor: 'pointer' }} >favorite</i>
        <i className="material-icons" style={{ cursor: 'pointer' }} >delete</i>
      </div>
    </div>
  )
}

export default Note;