import Storage from '../helpers/Storage';

const storeUserNotes = data => {
  return Storage.set('user_notes', data);
};
const getUserNotes = data => {
  return Storage.getString('user_notes') || '[]';
};

const StorageItems = {
  storeUserNotes,
  getUserNotes,
};
export default StorageItems;
