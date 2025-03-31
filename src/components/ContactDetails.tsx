import { ReactNode } from "react";

type ContactDetailsProps = {
  headline: string;
  children: ReactNode;
};

export const ContactDetails = ({ headline, children }: ContactDetailsProps) => {
  return (
    <div>
      <h4 className="relative uppercase text-lg after:w-5 after:h-0.5 after:content after:content-[''] after:block after:bg-red-500 after:mt-2 mb-5">
        {headline}
      </h4>
      <p>{children}</p>
    </div>
  );
};
