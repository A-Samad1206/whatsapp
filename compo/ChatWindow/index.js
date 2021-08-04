import ChatScreen from './ChatScreen';

const Index = ({ fromIndex, chat, messages }) => {
  return (
    <>
      {fromIndex ? (
        <div className="w-[70vw] fixed inset-y-0 right-0  m-0 bg-gradient-to-r from-red-200 via-indigo-400 to-red-200 bg-indigo-400 grid p-8 place-items-center bg-[#e5ded8] h-screen">
          <h2 className="text-white text-6xl">Welcome to WhatsApp2.0</h2>
        </div>
      ) : (
        <ChatScreen chat={chat && chat} messages={messages && messages} />
      )}
    </>
  );
};
export default Index;
