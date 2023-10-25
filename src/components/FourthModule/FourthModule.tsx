import UseMemoHook from "./UseMemoHook";

export default function FouthModule() {
  return (
    <div className="flex flex-col mr-10 text-center max-w-fit p-4 shadow-md rounded-md">
      <h2 className="font-bold text-lg">Module n°4</h2>
      <p className="font-bold">Les hooks avancés</p>
      <UseMemoHook />
    </div>
  );
}
