import { auth, db } from '#utils/firebaseConfig';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import ChatHeader from './ChatHeader';
import InputMessage from './InputMessage';
import ShowMessage from './MessageContainer';
import firebase from 'firebase';
import { updateLastSeen } from '#utils/firebaseFun';
import getRecievedEmail from '#utils/getRecievedEmail';

const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [input, setInput] = useState();
  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLastSeen(user);
    // db.collection('orders').doc(user.uuid).
    db.collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });
    setInput('');
  };
  const [messageSnapshot] = useCollection(
    db
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );

  const renderMsgCompo = (msg) =>
    msg && (
      <ShowMessage
        key={msg.id}
        user={msg.data().user}
        messages={{
          ...msg.data(),
          timestamp: msg.data().timestamp?.toDate().getTime(),
        }}
      />
    );
  const showMessages = () => {
    if (messageSnapshot) {
      return messageSnapshot.docs.map(renderMsgCompo);
    } else {
      // return JSON.parse(messages).map(renderMsgCompo);
    }
  };
  const messageRef = useRef();
  useEffect(() => {
    // if (messageRef.current) {
    //   messageRef.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'end',
    //     inline: 'nearest',
    //   });
    // }
    if (messageRef) {
      messageRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  });
  const res = getRecievedEmail(chat?.users, user);
  const [recipentSnapshot] =
    chat?.users &&
    useCollection(db.collection('users').where('email', '==', res));
  // const friend = recipentSnapshot?.docs[0].data();
  return (
    <>
      {/* <div className="relative"> */}
      <div
        ref={messageRef}
        className="w-[70vw] fixed inset-y-0 right-0 overflow-y-auto bg-[#e5ded8] "
      >
        {/* <div className="relative min-h-screen border-2 border-white"> */}
        {/* <ChatHeader friend={friend} /> */}
        {/* {showMessages()} */}
        {/* <div className="mb-[40px]" /> */}
        <InputMessage
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default ChatScreen;
