import { useMemo, useState } from "react";

export default function UseMemo() {
  // Permet de mémoriser une valeur afin d'optimiser les performances.
  // Pertinent ici, car le calcul ne doit être réalisé seulement lorsque password change.
  // Ne sert pas à grand chose de stocker en mémoire une action qui prend très peu de temps.
  const [firstname, setFirstname] = useState("Lizzie");
  const [password, setPassword] = useState("MDP");
  const security = useMemo(() => {
    return passwordSecurity(password);
  }, [password]);

  return (
    <form>
      <p className="text-gray-500">- useMemo -</p>
      <div className="flex flex-col my-2">
        <label htmlFor="firstname">Nom d'utilisateur</label>
        <input
          className="border border-indigo-500 rounded-md px-2 mx-2"
          type="text"
          value={firstname}
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Mot de passe</label>
        <input
          className="border border-indigo-500 rounded-md px-2 mx-2"
          type="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      Sécurité : {security}
    </form>
  );
}

function passwordSecurity(password: string) {
  if (password.length < 3) {
    return "Faible";
  } else if (password.length < 6) {
    return "Moyen";
  }
  return "Fort";
}
