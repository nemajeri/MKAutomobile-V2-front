import { ContactDetails } from "@components/ContactDetails";

const ContactInfo = () => {
  return (
    <div className="bg-[url('https://mkautomobile.at/images/footer.webp')] bg-no-repeat bg-cover bg-fixed bg-center shadow-[inset_0_0_0_1000px_#000000d9]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-5 lg:px-0">
          <ContactDetails headline="Kontakt">
            <p>Im Trenkenschuh 15-17</p>
            <p>2100 Korneuburg</p>
            <p className="text-red-500">
              <a href="tel:+43226220413">+43 2262 20413</a>
            </p>
            <p className="text-red-500">
              <a href="tel:+436803149332">+43 680 3149332</a>
            </p>
            <p className="text-red-500">
              <a href="mailto:office@mkautomobile.at">office@mkautomobile.at</a>
            </p>
          </ContactDetails>
          <ContactDetails headline="ÖFFNUNGSZEITEN">
            <p className="text-white">
              Probefahrt und Besichtigung sind <br /> ausschließlich nach Terminvereinbarung möglich.
            </p>
          </ContactDetails>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
