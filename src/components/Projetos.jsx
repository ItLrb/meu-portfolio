import { Tooltip } from 'flowbite-react'
import './Header.module.css'
import style from './Projetos.module.css'
import ourgamesPage from '../assets/ourgamesPage.jpg'
import livroproPage from '../assets/livroproPage.jpg'


function Projeto() {
    return (
        <>
            <hr className="w-[50%] text-center ml-[25%] border-[#fff] sm:block hidden" />
            <main id="projetos" className="flex justify-center items-left h-screen flex-col mt-5">
                <h2 className="font-bold text-[30px] drop-shadow-md text-white ml-0 sm:ml-52 text-center sm:text-left mt-24">PROJETOS</h2>
                <div id={style.projetos} className="flex flex-col sm:flex sm:flex-row h-screen sm:items-center sm:justify-center gap-10 text-white">
                    <section className="sm:grid sm:grid-rows-50 sm:grid-cols-50 sm:place-items-center flex justify-center flex-col mt-10">
                        <div className="sm:w-[550px] h-[470px] sm:flex sm:items-center sm:justify-center
                        border-[3px] rounded-[15px] border-[#1649FD] text-center sm:flex-col">
                            <img src={livroproPage} alt="LivroPro Home Page" className="w-[450px] rounded-[15px]" />
                            <h3 className="font-bold text-3xl text-center mt-5 sm:mt-0">LivroPro</h3>
                            <p className="font-semibold text-lg texnt-center">Um site sobre compras e pesquisas de livros.
                            <br/> <span className="font-normal mt-5 sm:mt-0">Linguagens Usadas:</span></p>
                        
                            <ul className="gap-4 mt-4 text-[#e4e4e4] place-items-center justify-center flex">
                                <Tooltip content="Html5 - HyperText Markup Language" placement="bottom" style="light">
                                    <li><i className="devicon-html5-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                                <Tooltip content="Css3 - Cascading Style Sheet" placement="bottom" style="light">
                                    <li><i className="devicon-css3-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                                <Tooltip content="ReactJs - JavaScript Library" placement="bottom" style="light">
                                    <li><i className="devicon-react-original text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex justify-center mt-4 items-center gap-6">
                                <li className="w-[135px] h-[47px] border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition rounded-[15px] flex items-center justify-center">
                                    <a href="https://pro-livro.vercel.app" target="_blank" className="flex items-center text-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512 " className="w-[17px] h-[17px] mr-1">
                                            <path fill="#ffffff" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                                        Visitar site
                                    </a>
                                </li>
                                <li className="w-[175px] h-[47px] border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition rounded-[15px] flex items-center justify-center">
                                    <a href="https://github.com/ItLrb/proLivro" target="_blank" className="flex items-center text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[17px] h-[17px] mr-1">
                                        <path fill="#ffffff" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                                        Ver repositório
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                    <section className="sm:grid sm:grid-rows-50 sm:grid-cols-50 sm:place-items-center mt-16 sm:mb-6">
                        <div className="sm:w-[550px] h-[470px] sm:flex sm:items-center sm:justify-center
                        border-[3px] rounded-[15px] border-[#1649FD] text-center sm:flex-col">
                            <img src={ourgamesPage} alt="OurGames Home Page" className="w-[450px] rounded-[15px]" />
                            <h3 className="font-bold text-3xl text-center mt-5 sm:mt-0">OurGames</h3>
                            <p className="font-semibold text-lg texnt-center">Um site sobre jogos e player perfil.
                            <br/> <span className="font-normal mt-5 sm:mt-0">Linguagens Usadas:</span></p>
                        
                            <ul className="gap-4 mt-4 text-[#e4e4e4] place-items-center flex justify-center">
                                <Tooltip content="Html5 - HyperText Markup Language" placement="bottom" style="light">
                                    <li><i className="devicon-html5-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                                <Tooltip content="Css3 - Cascading Style Sheet" placement="bottom" style="light">
                                    <li><i className="devicon-css3-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                                <Tooltip content="JavaScript - Programming Language" placement="bottom" style="light">
                                    <li><i className="devicon-javascript-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                                <Tooltip content="PHP - Programming Language" placement="bottom" style="light">
                                    <li><i className="devicon-php-plain text-[35px] p-[5px] border-[3px] border-[#1649FD] rounded-[15px]"></i></li>
                                </Tooltip>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex justify-center mt-4 items-center gap-6">
                                <li className="w-[135px] h-[47px] border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition rounded-[15px] flex items-center justify-center">
                                    <a href="https://our-games.vercel.app" className="flex items-center text-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512 " className="w-[17px] h-[17px] mr-1">
                                            <path fill="#ffffff" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                                        Visitar site
                                    </a>
                                </li>
                                <li className="w-[175px] h-[47px] border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition rounded-[15px] flex items-center justify-center">
                                    <a href="https://github.com/ItLrb/ourGames?tab=readme-ov-file" className="flex items-center text-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[17px] h-[17px] mr-1">
                                        <path fill="#ffffff" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                                        Ver repositório
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Projeto