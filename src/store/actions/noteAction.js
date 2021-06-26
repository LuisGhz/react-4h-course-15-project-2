export const addNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('notes')
    .add({
      ...note,
      favorites: false,
      createdAt: new Date()
    })
    .then(() => {
      console.log('Note added successfully');
    })
    .catch(err => console.error(`Something was wrong: ${ err }`))
  }
}