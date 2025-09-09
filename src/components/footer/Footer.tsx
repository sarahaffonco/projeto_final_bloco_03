import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { type ReactNode } from "react";

function Footer() {
  const data = new Date().getFullYear();


  let component: ReactNode;

  if (!component) {
    component = (
      <>
        <div className="flex justify-center bg-emerald-700 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
              Epharmac | Copyright: {data}
            </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sarah-jorge-affonco/"
                target="_blank"
              >
                <LinkedinLogoIcon size={48} weight="bold" />
              </a>
              <a
                href="https://www.instagram.com/sarah_affonco/"
                target="_blank"
              >
                <InstagramLogoIcon size={48} weight="bold" />
              </a>
              <a href="https://web.facebook.com/sarah.affonco/" target="_blank">
                <FacebookLogoIcon size={48} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <>{component}</>;
}

export default Footer;
