import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import Form from 'components/Form';
import NotesList from 'components/NotesList';

const Home = () => {
  useFirestoreConnect([{ collection: 'notes', orderBy: [ 'createdAt', 'desc' ] }])
  const notes = useSelector(state => state.firestore.ordered.notes);

  return (
    <div className="container" >
      <div className="row center-align">
        <div className="col s7"><Form /></div>
        <div className="col s5"><NotesList notes={ notes } /></div>
      </div>
    </div>
  )
}

export default Home;