import { Play } from "phosphor-react";

export const Home = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">
            Vou trabalhar em
            <input type="text" id="task" />
          </label>
          <label htmlFor="minutesAmmount">
            Durante
            <input type="number" id="minutesAmmount" />
          </label>
          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  );
};
