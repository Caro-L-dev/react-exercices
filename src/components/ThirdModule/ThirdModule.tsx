import Weather from "./Weather";

export default function ThirdModule() {
  return (
    <div className="flex flex-col text-center max-w-fit p-4 shadow-md rounded-md">
      <h2 className="font-bold text-lg">Module n°3</h2>
      <p className="font-bold">Les hooks</p>
      <p className="mb-5">Application Météo</p>
      <Weather />
    </div>
  );
}
