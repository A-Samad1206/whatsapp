import WhatsApp from "./SVG/WhatsApp";
// import { Circle } from "better-react-spinkit";
function Loading() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col items-center">
        <WhatsApp w={200} h={200} />
        {/* <Circle color="#3CBC28" size={80} /> */}
      </div>
    </div>
  );
}

export default Loading;
