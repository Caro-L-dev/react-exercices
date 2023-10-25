import CustomHook from "./CustomHook";
import UseMemoHook from "./UseMemoHook";

export default function FouthModule() {
  return (
    <div className="flex flex-col mr-10 text-center max-w-fit p-4 shadow-md rounded-md">
      <h2 className="font-bold text-lg">Module n°4</h2>
      <p className="font-bold mb-4">Les hooks avancés</p>
      <div className="flex justify-around flex-wrap">
        <UseMemoHook />
        <CustomHook />
      </div>
    </div>
  );
}
