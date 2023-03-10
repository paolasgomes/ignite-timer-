import { Play } from "phosphor-react";
import {
  HomeContainer,
  CountDownContainer,
  FormContainer,
  Separator,
  StarCountDownButton,
  TaskInput,
  MinutesAmmountInput,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">
            Vou trabalhar em
            <TaskInput
              type="text"
              id="task"
              list="task-suggestions"
              placeholder="Dê um nome para o seu projeto"
            />
            <datalist id="task-suggestions">
              <option value="Projeto 1"></option>
            </datalist>
          </label>
          <label htmlFor="minutesAmmount">
            Durante
            <MinutesAmmountInput
              type="number"
              id="minutesAmmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
          </label>
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StarCountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StarCountDownButton>
      </form>
    </HomeContainer>
  );
};
