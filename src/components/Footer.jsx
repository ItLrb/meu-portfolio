import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Foot() {
  return (
    <Footer className="bg-[#0F0F0F] mt-[650px] sm:mt-32" id="contatos">
      <div className="w-full text-white place-items-center">
        <div className="flex w-full px-6 py-8 md:flex">
          <div className="flex justify-center w-full flex-col items-center">
            <h3 className="font-semibold text-xl">Meus Contatos</h3>
            <ul className="flex items-baseline gap-7 mt-10 font-bold text-[20px] underline">
                <li><a href="https://www.linkedin.com/in/italo-roberto-a4921b278/" target="_blank" className="inline-flex items-center gap-2 underline"><FooterIcon icon={BsLinkedin} /> Meu LinkedIn
                </a></li>
                <li><a href="https://github.com/ItLrb" target="_blank" className="inline-flex items-center gap-2 underline"><FooterIcon icon={BsGithub} /> Meu Github
                </a></li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#070707] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Italo Roberto" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.linkedin.com/in/italo-roberto-a4921b278/" target="_blank" icon={BsLinkedin} />
            <FooterIcon href="https://github.com/ItLrb" target="_blank" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Foot