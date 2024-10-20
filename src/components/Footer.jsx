import { Footer, FooterCopyright, FooterIcon } from 'flowbite-react';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

function Foot() {
  return (
    <Footer className="bg-[#0F0F0F] mt-[650px] sm:mt-32" id="contatos">
      <div className="w-full text-white place-items-center">
        <div className="flex w-full px-6 py-8 md:flex">
          <div className="flex justify-center w-full flex-col items-center">
            <h3 className="font-semibold text-xl">My contacts</h3>
            <ul className="flex justify-center ml-[23%] sm:ml-[70px] sm:flex-row sm:items-baseline gap-7 mt-10 flex-col font-bold text-[20px] underline">
                <li><a href="https://www.linkedin.com/in/italo-roberto-a4921b278/" target="_blank" className="inline-flex items-center gap-2 underline"><FooterIcon icon={BsLinkedin} /> My LinkedIn
                </a></li>
                <li><a href="https://github.com/ItLrb" target="_blank" className="inline-flex items-center gap-2 underline"><FooterIcon icon={BsGithub} /> My Github
                </a></li>
                <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQzBSgTrwHssmvfQGjNpnlKWmZtCjWMpfjXrscKlbtKbxrltGsBBQWzsnpmHSLpnTGBpG" target="_blank" className="inline-flex items-center gap-2 underline"><FooterIcon icon={BsEnvelope} />italoir06@gmail.com
                </a></li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#070707] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Italo Roberto" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.linkedin.com/in/italo-roberto-a4921b278/" target="_blank" icon={BsLinkedin} />
            <FooterIcon href="https://github.com/ItLrb" target="_blank" icon={BsGithub} />
            <FooterIcon href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQzBSgTrwHssmvfQGjNpnlKWmZtCjWMpfjXrscKlbtKbxrltGsBBQWzsnpmHSLpnTGBpG" target="_blank" icon={BsEnvelope} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Foot