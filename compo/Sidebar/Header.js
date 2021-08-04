import {
  UserCircleIcon,
  ChatAltIcon,
  DotsVerticalIcon,
  RewindIcon,
} from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '#utils/firebaseConfig';
import { updateLastSeen } from '#utils/firebaseFun';
import { useRouter } from 'next/router';
const Header = ({ fromIndex }) => {
  // console.log('HeaderHeader');
  const [user] = useAuthState(auth);
  const logOut = () => {
    if (confirm('Do u wanna Log Out!')) {
      updateLastSeen(user);
      auth.signOut();
    }
  };
  const router = useRouter();
  return (
    <div className="h-[59px] w-full flex justify-between items-center px-[10px] bg-header-bg-color border-b-[0.5px] border-[whitesmoke]">
      <div className="flex justify-center items-center">
        {!fromIndex && (
          <RewindIcon
            className="h-6 w-12 text-header-icon-color  hover:opacity-70"
            onClick={() => router.push('/')}
          />
        )}
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.email}
            title={user.email}
            className="h-10 w-10 cursor-pointer text-header-icon-color hover:opacity-70 rounded-full"
            onClick={logOut}
          />
        ) : (
          <UserCircleIcon
            onClick={logOut}
            className="h-10 w-10 text-header-icon-color hover:opacity-70"
          />
        )}
      </div>
      <div className="flex items-center">
        <ChatAltIcon className="h-6 w-6 text-header-icon-color  hover:opacity-70" />
        <DotsVerticalIcon className="h-6 w-6 text-header-icon-color mx-2 hover:opacity-70" />
      </div>
    </div>
  );
};

export default Header;
