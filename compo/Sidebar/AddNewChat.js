import { PlusIcon } from '@heroicons/react/outline';
import * as EmailValidator from 'email-validator';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '#utils/firebaseConfig';

const AddNewChat = ({ chatSnapShot }) => {
  const [user] = useAuthState(auth);
  // console.log('AddNewChatAddNewChat');
  const createChat = () => {
    const input = prompt(
      'Please enter the email address for the user you wish to chat with.'
    );
    // console.log(
    //   "chatAlreadyExists(input)",
    //   chatAlreadyExists(input),
    //   "chatAlreadyExists(input)"
    // );
    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      user.email !== input
    ) {
      // If email is valid & not already exist then add to Chats collections.
      console.log('object');

      db.collection('chats').add({
        users: [user.email, input],
      });
    } else {
      console.log('object11111');
      return null;
    }
  };

  var chatAlreadyExists = (recipientEmail) =>
    !!chatSnapShot?.docs.find((chat) =>
      chat.data().users.find((user) => {
        return user === recipientEmail;
      })
    );

  return (
    <button
      onClick={createChat}
      className="uppercase w-full bg-gray-200 outline-none hover:bg-gray-300 text-center py-2 
      border-2 border-green-400
      focus:outline-none text-black  font-sm flex justify-center items-center "
    >
      <span> Add friend </span> <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default AddNewChat;
