import HomeCompo from '#compo/Home';
import { auth, db } from '#utils/firebaseConfig';
import getRecievedEmail from '#utils/getRecievedEmail';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatWindow({ messages, chat }) {
  const [user] = useAuthState(auth);
  const data = {};

  // console.log(`messages:-${messages}=== chat:-${chat}`);
  return (
    <>
      <Head>
        <title>{getRecievedEmail(chat.users, user)}</title>
      </Head>
      <HomeCompo fromIndex={false} chat={chat} messages={messages} />
    </>
  );
}
// export async function getServerSideProps(ctx) {
//   return {
//     props: {
//       messages: [],
//       chat: [],
//     },
//   };
// }
export async function ggetServerSideProps(ctx) {
  const ref = db.collection('chats').doc(ctx.query.id);

  //Prep the messages on server of respective chat
  const msgs = await ref
    .collection('messgaes')
    .orderBy('timestamp', 'asc')
    .get();

  const messages =
    msgs &&
    msgs.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .map((msgs) => ({
        ...msgs,
        timestamp: msgs.timestamp.toDate().getTime(),
      }));

  // prep the chats on server
  const chatRef = await ref.get();

  const chat = {
    id: chatRef.id,
    ...chatRef.data(),
  };

  console.log(`messages:-${messages}=== chat:-${JSON.stringify(chat)}`);
  // JSON.stringify(messages)
  return {
    props: {
      messages: [],
      chat,
    },
  };
}

export default ChatWindow;
