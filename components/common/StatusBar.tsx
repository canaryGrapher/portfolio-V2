import { useHumanReadableTime, useHumanReadableDate } from "../../hooks";

const StatusBar = () => {
  const statusTime = useHumanReadableTime();
  const statusDate = useHumanReadableDate();
  return (
    <div
      className="fixed top-0 w-full h-8 flex flex-col justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="flex flex-row justify-between px-10 text-sm">
        <p></p>
        <p>
          {statusTime}&ensp;|&ensp;{statusDate}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default StatusBar;
