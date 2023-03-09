import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { History } from "../../pages/History";

import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  );
};
