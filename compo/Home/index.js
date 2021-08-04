import Sidebar from '#compo/Sidebar';
import ChatWindow from '#compo/ChatWindow';
function index({ fromIndex, messages, chat }) {
  return (
    <>
      <div className="w-[30vw] fixed z-40 inset-y-0 left-0 overflow-y-auto overflow-x-hidden ">
        <Sidebar fromIndex={fromIndex} />
      </div>
      <ChatWindow
        fromIndex={fromIndex}
        chat={!fromIndex && chat}
        messages={!fromIndex && messages}
      />
    </>
  );
}

export default index;
