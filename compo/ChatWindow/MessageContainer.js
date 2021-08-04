import { auth } from '#utils/firebaseConfig';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function ShowMessage({ user, messages }) {
  const [loggedInUser] = useAuthState(auth);

  return (
    <div className="flex-grow">
      <div className="px-6 py-4 text-justify w-full flex flex-col justify-items-start">
        {loggedInUser.email === user ? (
          <RightChat messages={messages} />
        ) : (
          <LeftChat messages={messages} />
        )}
      </div>
    </div>
  );
}

export default ShowMessage;
const LeftChat = ({ messages }) => (
  <div
    id="left"
    className="py-1 rounded-lg inline-block px-2 mb-1 self-start ml-0 bg-white max-w-[50%]"
  >
    <div className="text-xs font-bold mx-1">{messages.user}</div>
    {messages.message}
  </div>
);
const RightChat = ({ messages }) => (
  <div
    id="right"
    className="py-1 rounded-lg inline-block self-end px-2 mb-1 mr-0 bg-white max-w-[50%]"
  >
    <div className="text-xs font-bold mx-1">{messages.user}</div>
    {messages.message}
  </div>
);
