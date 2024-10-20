import './Header.module.css'
import { Dropdown, DropdownItem } from 'flowbite-react'


function Header() {
    return (
        <>
            <header className="w-screen h-20 bg-[#1A1A1A] flex items-center justify-start pl-10 sm:pl-0 fixed z-20 sm:justify-center">
                <nav className="flex items-center font-semibold">
                    <div className="flex sm:hidden border-[3px] border-[#1649FD] rounded-[12px] z-10 mr-11 sm:mr-0">
                        <Dropdown label="Menu" size="sm" dismissOnClick={true} className="bg-[#1A1A1A] text-white w-48 border-[#1649FD] h-[200px]" theme={{ floating: { target: 'bg-[#1A1A1A]' } }}>
                            <ul className="flex flex-col justify-start gap-4 item-end mt-1 ml-7">
                                <li className="border-b border-b-white hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#home">HOME</a></li>
                                <li className="border-b border-b-white hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#sobre">ABOUT ME</a></li>
                                <li className="border-b border-b-white hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#projetos">PROJECTS</a></li>
                                <li className="border-b border-b-white hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#contatos">CONTACTS</a></li>
                            </ul>
                        </Dropdown>
                    </div>

                    <ul className="hidden sm:navitems sm:inline-flex sm:gap-6 gap-12">
                        <li className="hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#home">HOME</a></li>
                        <li className="hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#sobre">ABOUT ME</a></li>
                    </ul>
                        <div className="
                            logo w-[140px] h-[70px] bg-[url('./assets/blacklogo.jpg')] bg-cover bg-center
                            flex items-center
                        "></div>
                    <ul className="hidden sm:navitems sm:inline-flex sm:gap-6 gap-12">
                        <li className="hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#projetos">PROJECTS</a></li>
                        <li className="hover:text-[#1649FD] hover:border-b hover:transition hover:border-b-[#0225a3]"><a href="#contatos">CONTACTS</a></li>
                    </ul>
                    
                </nav>
            </header>
        </>
    )
}

export default Header