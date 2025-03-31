import { Outlet, useLocation } from "react-router";
import { PhoneCallIcon, PhoneIcon, MailIcon } from "lucide-react";

import { getTitleFromPath } from "@/utils";
import { Footer, Header, Nav } from "@/components";

const PageLayout = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-[url('https://mkautomobile.at/images/dark-min.webp')] bg-cover bg-center h-96 top-0">
        <Header>
          <div className="container justify-center flex mx-auto sm:justify-between gap-x-4 flex-wrap items-center">
            <div className="flex items-center gap-x-4">
              <Header.Item icon={<PhoneCallIcon className="!size-4" />}>+43 2262 20413</Header.Item>
              <Header.Item icon={<PhoneIcon className="!size-4" />}>+43 680 3149332</Header.Item>
            </div>
            <Header.Item icon={<MailIcon className="!size-4" />}>office@mkautomobile.at</Header.Item>
          </div>
        </Header>
        <Nav>
          <Nav.Item to="/">Home</Nav.Item>
          <Nav.Item to="/fahrzeugangebote">Fahrzeugangebote</Nav.Item>
          <Nav.Item to="/finanzierung">Finanzierung</Nav.Item>
          <Nav.Item to="/fahrzeugankauf">Fahrzeugankauf</Nav.Item>
          <Nav.Item to="/galerie">Galerie</Nav.Item>
          <Nav.Item to="/kontakt">Kontakt</Nav.Item>
        </Nav>

        <img src="https://mkautomobile.at/images/mkautomobile.svg" alt="Logo" className="mx-auto lg:scale-150" />
        <div className="container mx-auto">
          <h1 className="text-center lg:text-left mt-16 font-bold text-3xl lg:text-4xl">
            {getTitleFromPath(location.pathname)}
          </h1>
        </div>
      </div>
      <Outlet />
      <Footer>
        <div className="container justify-center flex mx-auto sm:justify-between gap-x-4 flex-wrap items-center">
          <div className="flex items-center gap-x-4">
            <Footer.Item>Impressum</Footer.Item>
            <Footer.Item>Datenschutz</Footer.Item>
          </div>
          <Footer.Item>© 2023 MK Automobile</Footer.Item>
        </div>
      </Footer>
    </>
  );
};

export default PageLayout;
