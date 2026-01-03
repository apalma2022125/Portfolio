import React from "react";
import AnimatedDivider from "../Shared/AnimatedDivider";
import { Fade, Bounce } from "react-reveal";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();
  const cvLink = i18n.language === 'en' ? '/cv-en.pdf' : '/cv-es.pdf';

  return (
    <section
      id="contact-me"
      className="px-10 lg:px-0 w-full flex items-center justify-center bg-backgroundColor"
    >
      <div className="text-center lg:pt-20 pt-0" style={{ width: "650px" }}>
        <Bounce Right>
          <h1 className="text-5xl lg:text-7xl pb-2">{t('contact')}</h1>
        </Bounce>

        <AnimatedDivider scrollPositionOffset={3680} speedMultiplier={1} />

        <Fade bottom>
          <div className="text-xl lg:text-2xl leading-relaxed">
            <p>{t('sendEmail')}</p>
            <a
              href="mailto:angelonovpalma29@gmail.com"
              className="font-bold"
            >
              angelonovpalma29@gmail.com
            </a>
            <p className="pt-5">{t('orCall')}</p>
            <p className="font-bold">(+502) 4548-4207</p>
          </div>
        </Fade>
        <AnimatedDivider scrollPositionOffset={4000} speedMultiplier={1} />
        <div className="flex items-center justify-center gap-10">
          <a
            href="https://github.com/apalma2022125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="Icono 1"
              className="w-10 h-10"
            />
          </a>

          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            download="CV - Ángelo Javier Palma"
          >
            <img
              src="/downloadWhite.svg"
              alt="Icono 1"
              className="w-10 h-10"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/angelo-palma2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.svg"
              alt="Icono 1"
              className="w-8 h-8"
            />
          </a>
        </div>
        <p className="pt-10 text-sm">2024. Ángelo Javier Palma</p>
      </div>
    </section>
  );
}

export default Contact;
