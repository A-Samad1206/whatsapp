import React from 'react';
import SingleContactList from './SingleContactList';
const ContactList = ({ chatSnapShot }) => {
  // console.log('ContactListContactList');
  return (
    <ul className="divide-y-[1px] ">
      {chatSnapShot?.docs?.map((chat) => {
        return (
          <SingleContactList
            key={chat.id}
            id={chat.id}
            users={chat.data().users}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
