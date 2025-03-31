import { Outlet } from "react-router";
import { PhoneCallIcon, PhoneIcon, MailIcon } from "lucide-react";

import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PageLayout = () => {
  return (
    <>
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
