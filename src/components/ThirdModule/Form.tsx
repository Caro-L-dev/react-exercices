import { FormEvent, FC } from "react";

interface FormProps {
  getWeather: (event: FormEvent) => void;
}

const Form: FC<FormProps> = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" placeholder="ville" name="ville" />
      <input type="text" placeholder="pays" name="pays" />
      <button>Envoyer</button>
    </form>
  );
};

export default Form;
