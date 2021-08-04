import { auth, db } from '#utils/firebaseConfig';
import getRecievedEmail from '#utils/getRecievedEmail';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const SingleContactList = ({ users, id }) => {
  // console.log('SingleContactListSingleContactList');
  const [user] = useAuthState(auth);

  const [friends] =
    users &&
    useCollection(
      db.collection('users').where('email', '==', getRecievedEmail(users, user))
    );

  const friendDetails = friends?.docs?.[0]?.data();
  const router = useRouter();
  const enterChat = () => router.push(`/chat/${id}`);
  return (
    <li
      key={id}
      onClick={enterChat}
      className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
    >
      {friendDetails ? (
        <img src={friendDetails?.photoURL} className="w-10 h-10 rounded-full" />
      ) : (
        <span className="w-10 h-10 rounded-full bg-gray-400" />
      )}
      <h1 className="font-bold text-base flex items-center flex-1 ml-4">
        {getRecievedEmail(users, user)}
      </h1>
    </li>
  );
};
export default SingleContactList;
