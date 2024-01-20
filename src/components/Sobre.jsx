import { Tooltip } from "flowbite-react"

function Sobre() {
    return (
        <>
            <hr id="sobre" className="w-[50%] text-center ml-[25%] border-[#fff] mt-10 sm:mt-0 sm:block hidden" />
            <main  className="place-items-center sm:flex h-screen sm:justify-around sm:items-center sm:ml-[33px]">
                <div className="text-white">
                    <h2 className="font-bold text-[30px] drop-shadow-md text-center sm:text-left">SOBRE MIM</h2>
                    <p className="font-semibold text-[30px] text-center sm:text-left drop-shadow-md">meu nome é Italo e eu sou de <br/>
                        <span className="text-[#1649FD]">Salvador - Bahia 📍</span> e estou <br/>
                        estudando programação na <br/>
                        área de <span className="text-[#1649FD]">Front-End</span> já tem 2  <br/>
                        anos, ao acessar meu <br /> 
                        <span className="text-[#1649FD]">LinkedIn</span>  você terá mais <br />
                        informações e ao lado você <br />
                        pode ver as stacks que eu <br />
                        tenho conhecimento.
                    </p>
                    <div className="buttons flex ml-11 sm:ml-0 justify-center mr-9 sm:inline-flex sm:items-center mt-5">
                        <button className="border-[3px] rounded-[15px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition-all font-semibold text-[26px]
                        px-[35px] py-[2px] flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" 
                            height="20" width="20" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                            </svg>
                            <a href="../assets/meucv.pdf" download className="flex items-center">Download CV</a>
                        </button>
                    </div>
                </div>

                <div className="stacks flex justify-center mr-2 mt-8 sm:mt-0 sm:flex sm:items-center sm:justify-center sm:mr-44">
                    <ul className="gap-7 text-[#e4e4e4] sm:place-items-center">
                        <Tooltip content="Html5 - HyperText Markup Language" placement="top" style="light">
                            <li><i className="devicon-html5-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="Css3 - Cascading Style Sheet" placement="top" style="light">
                            <li><i className="devicon-css3-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="TailWindCss - Css Library" placement="left" style="light">
                            <li><i className="devicon-tailwindcss-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="JavaScript - Programming Language" placement="right" style="light">
                            <li><i className="devicon-javascript-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="ReactJs - JavaScript Library" placement="left" style="light">
                            <li><i className="devicon-react-original text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="PHP - Programming Language" placement="right" style="light">
                            <li><i className="devicon-php-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="MySql - DataBase" placement="bottom" style="light">
                            <li><i className="devicon-mysql-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                        <Tooltip content="Cplusplus - Programming Language" placement="bottom" style="light">
                            <li><i className="devicon-cplusplus-plain text-[48px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                        </Tooltip>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Sobre