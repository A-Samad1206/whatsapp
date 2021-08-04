import { PaperClipIcon } from '@heroicons/react/outline';
import { DotsVerticalIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import TimeAgo from 'timeago-react';

const ChatHeader = ({ friend }) => {
  console.log(
    'friend?.lastSeen',
    friend?.lastSeen.toDate(),
    'friend?.lastSeen'
  );
  return (
    <div
      className="h-[59px] w-full flex justify-between items-center px-[10px] bg-header-bg-color border-l-[1px] border-black 
      sticky top-0"
    >
      <div className="flex justify-center items-center">
        <UserCircleIcon className="h-10 w-10 text-header-icon-color hover:opacity-70" />
        <div className="flex ml-2 flex-col justify-center">
          <div className="font-xs font-bold leading-none">{friend?.email}</div>
          <div className="text-[6px] font-light leading-none  pt-1">
            Last Seen <TimeAgo date={friend?.lastSeen?.toDate().getTime()} />
            {/* {JSON.stringify(friend?.lastSeen?.toDate())} */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PaperClipIcon className="h-6 w-6 text-header-icon-color mx-2 hover:opacity-70" />
        <DotsVerticalIcon className="h-6 w-6 text-header-icon-color mx-2 hover:opacity-70" />
      </div>
    </div>
  );
};

export default ChatHeader;
