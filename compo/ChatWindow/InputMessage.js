import { EmojiHappyIcon, FastForwardIcon } from '@heroicons/react/outline';
const InputMessage = ({ input, handleChange, handleSubmit }) => {
  return (
    <>
      {/* {' '} */}
      <div className="mt-[40px]" />
      <div className=" h-[40px] bg-header-bg-color fixed  z-60 px-1 right-0 w-[70vw]  py-1.5 bottom-0 border border-gray-400">
        <div className="w-full rounded-full h-full px-2 bg-white flex items-center">
          <EmojiHappyIcon className="text-header-icon-color w-4 h-4" />
          <form
            onSubmit={handleSubmit}
            className="flex-grow outline-none px-2 text-xs h-full ml-1 flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={handleChange}
              className="flex-grow outline-none px-2 text-xs h-full ml-1"
            />
            <button className="outline-none">
              <FastForwardIcon
                onClick={handleSubmit}
                className="text-header-icon-color justify-self-end w-4 h-4 mx-2"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputMessage;
