import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import ContactList from './ContactList';
import Header from './Header';
import AddNewChat from './AddNewChat';
import SearchInput from './SearchInput';
import { auth, db } from '#utils/firebaseConfig';
// import { useState } from 'react';
const index = ({ fromIndex }) => {
  // let [chatSnapShot, setchatSnapShot] = useState([]);
  // console.log('object from index');
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
  // .get()
  // .then((snap) => {
  //   console.log('snap', snap.docs[0].data(), 'snap');
  //   setchatSnapShot(snap);
  // });
  const [chatSnapShot] = useCollection(userChatRef);
  return (
    <>
      <div className="sticky top-0 z-50 ">
        <Header fromIndex={fromIndex} />
        <SearchInput />
        <AddNewChat chatSnapShot={chatSnapShot} />
      </div>
      {/* <div className="relative top-0 bottom-0 z-40 "> */}
      <ContactList chatSnapShot={chatSnapShot} />
      {/* </div> */}
    </>
  );
};

export default index;
