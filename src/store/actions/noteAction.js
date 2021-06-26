export const addNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('notes')
    .add({
      ...note,
      favorite: false,
      createdAt: new Date()
    })
    .then(() => {
      console.log('Note added successfully');
    })
    .catch(err => console.error(`Something was wrong: ${ err }`))
  }
}

export const deleteNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('notes').doc(note.id).delete()
    .then(() => {
      console.log('Note deleted successfully');
    })
    .catch(err => console.error(`Something was wrong: ${ err }`))
  }
}

export const toggleFavoriteNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const favorite = !note.favorite;
    const firestore = getFirestore()
    firestore.collection('notes').doc(note.id).update({
      favorite
    })
    .then(() => {
      console.log('Note updated successfully');
    })
    .catch(err => console.error(`Something was wrong: ${ err }`))
  }
}