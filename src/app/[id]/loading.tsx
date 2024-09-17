import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <h1>Loading</h1>
      <BeatLoader size={10} loading={true} />
    </div>
  );
};

export default Loading;
