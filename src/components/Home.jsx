import { Tooltip, Card } from "flowbite-react"
import React, { useState }  from "react"
import resume from '../assets/Currículo_Italo_Roberto.pdf'

function Home() {
    const [isShown, setIsShown] = useState(false)
    const [isShownGB, setIsShownGB] = useState(false)


    return (
        <>
            <main id="home" className="flex justify-center items-center w-screen h-screen">
                <div className="text-white">
                    <h2 className="font-bold text-[46px] drop-shadow-md text-center sm:text-left">Hello 👋,</h2>
                    <p className="font-semibold text-[30px] drop-shadow-md text-center sm:text-left">My name is Italo Roberto and <br/>
                        I'm <span className="text-[#1649FD]">.NET Dev | FullStack</span> <br/>
                        welcome to my portfolio <br/>
                        right bellow you can download <br/>
                        <span className="text-[#1649FD]">CV</span> and my social medias. <br/> 
                        <span className="text-[15px] text-[#767676] hidden sm:block md:block">*pass the mouse over the icons to preview*</span></p>
                    <div className="buttons inline-flex items-center mt-5">
                        <button className="border-[3px] rounded-[15px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition-all font-semibold text-[26px]
                        sm:px-[35px] py-[2px] px-[20px] flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" 
                            height="20" width="20" viewBox="0 0 512 512">
                                <path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                            </svg>
                            <a href={resume} download="Cv Italo Roberto" className="flex items-center">Download CV</a>
                        </button>

                        <ul className="flex gap-[20px] ml-7"> 
                            <li 
                            id="linkedin"  
                            className="border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition-all rounded-[15px] px-[3px] py-[3px]">   
                                    <a 
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                    href="https://www.linkedin.com/in/italo-roberto-a4921b278/" 
                                    target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                        x="0px" y="0px" width="37" height="37" viewBox="0 0 48 48">
                                            <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                        </svg>
                                    </a>
                                    {isShown && ( 
                                        <Card href="#" className="hidden z-20 w-[420px] left-[325px] mt-3 sm:flex absolute bg-[#1B1F23] border-[#1B1F23] justify-center">
                                            <div 
                                                className="banner w-[420px] h-16 bg-cover bg-center absolute left-[0px] top-[0px] rounded-t-md
                                                    bg-[url('https://media.licdn.com/dms/image/v2/D4D16AQFCXsTVy72J0Q/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1709405756729?e=1734566400&v=beta&t=UejqTKBb_iBicR9FbUU4r_7B_bm0O5mPQq4L0TPesCg')]"></div>
                                            <div className="z-10 flex justify-between items-center">
                                                <section
                                                className="w-[75px] h-[75px] rounded-full bg-center bg-cover
                                                    bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQFxVTmNDzO32w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731976307655?e=1737590400&v=beta&t=p3pw6uvmx23rD29SABOoV6tP30X-daXzjQSkzY_v_eA')]"></section>
                                                <button className="z-10 bg-[#1B1F23] border-[2px] border-[#1649FD] px-2 py-[4px] rounded-full">
                                                My profile</button>
                                            </div>
                                            <div className="ml-3 z-10">
                                                <h2 className="font-semibold text-xl">Italo Roberto</h2>
                                                <p className="text-sm">Developer FullStack | C# | .NET | Blazor | React | SQL | GIT</p>
                                            </div>
                                            
                                        </Card>
                                    )}
                            </li>
                            <li id="github" className="border-[3px] border-[#1649FD] hover:bg-[#0a3e6bb2] transition-all rounded-[15px] px-[3px] py-[3px]">
                                    <a 
                                    onMouseEnter={() => setIsShownGB(true)}
                                    onMouseLeave={() => setIsShownGB(false)}
                                    href="https://github.com/ItLrb" 
                                    target="_blank">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC00lEQVR4nL2YW4hOURTHfzPfyPXjDWOGB4kXIeRBhKLx4PIwJUqKN8K8e3LJw5DkSYowCQ/ILXlwSepjkEvKdVxHPCA1yLjM92lpTe22s/Y53/edM/9anTr7f/b6n33WWnvtA9WhFmgEpgDT9Nqo9/sMNcBsYCdwC/gBlCJM7rcDO4BZ+lzqGARsBF4aIuLsBbAeGJiWoGXAuwrF+PYWaK5GzFDgWEpiSp4dAfLlCqoH7mUkqKT2UJMiEUYBHRkLKqk9B0bGCRoMPOgjQSW1u5pIJtoiHroOLAVagdcVOn4GbAUWGy99wBK0yJiwxeHUAeuAj0AP8Bg4AxwC9gKHgbMqogi8B9Z4xXSb4afJF1QXiKP5ES+QT5A9wzQcfCw3/DwFci5xVWDp55EumgO+VrrE9gBxbcqiNgV8FXpJEwKkogZnmlgRkxTjhLQhQDCzokqcCPiUROJ4gDCebDAj4POoEO4HdvasUKNlxSqmfDIGL5Mt7hh+RSw/jcFLGYu6bfgVPXwzBuWzZok3ht8uGXxlDH7OsNceAHQbfqW7/ddrW5kgWZIFmgI+bwphf4CwJyNRbQGf+9D9phQIOqn4aWK6dhiWT6n4NOh2EuoO61MSNDbmENLj+roQIIp90FNNpYEvrdFqTZ6Qn3PuQwudgW496c4BrnkPdQDbNVBHB0TkdFWWALuAzhgxvbbAL/tuhZUyMQnoB1wxJrgYWDlZmasJhbhZ999Jeirw2yF1avc4wnjTmTGfbG4Zgn4Bk62JWj3yFr3foKXjiTaEu/3WNQL9YxLINQkJE7Ls5x3yFxVUKb4mEHQ6wQsyxNssH4WWNgZdMYIKcWc+F3lvxYrADeCgfkapyElgbfZiJ43TThA5jbE/ERPKeS4JvhtBvbnaf1ZSswoRxTQJ/J9qUvcmkhJqtRBKbZKtQLIwCWRFpcyc0kNtJn/0BGOA4Qm58kel7H3zLwqmPeGvOB5gAAAAAElFTkSuQmCC" />
                                    </a>
                                    {isShownGB && ( 
                                    <Card href="#" className="hidden z-20 w-[280px] left-[450px] mt-3 sm:flex-col sm:justify-center sm:flex absolute bg-[#0D1117] border-[#0D1117] justify-center">
                                        <div className="z-10 flex justify-center items-center flex-col">
                                            <section
                                            className="w-[100px] h-[100px] rounded-full bg-center bg-cover
                                                bg-[url('https://avatars.githubusercontent.com/u/134540029?v=4')]"></section>
                                        </div>
                                        <div className="ml-3 z-10 text-center">
                                            <h2 className="font-semibold text-xl">Italo ( ItLrb ) </h2>
                                            <p className="text-md text-[#3C4149]">ItLrb · he/him</p>
                                            <p className="text-md ">.NET FullStack Developer 👨‍💻 | C# | Js | Blazor | Sql</p>
                                        </div>
                                        <button className="w-full border border-[#8B949E] bg-[#21262D] rounded-md text-[#969DA4]">
                                            My profile
                                        </button>
                                    </Card>
                                    )}
                            </li>
                        </ul>
                    </div>
                    <span className="hidden sm:inline-flex sm:items-center sm:gap-3 sm:mt-52 sm:absolute sm:text-[#4d4c4c] sm:font-semibold sm:animate-bounce sm:justify-center">
                        <svg className="text-center" 
                        xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                            <path fill="#4d4c4c" d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/>
                        </svg>
                        Scroll down
                    </span>
                </div>

                <div className="pcImg ">
                <div className="
                    sm:w-[520px] sm:h-[520px] sm:bg-[url('./assets/Devices-cuate.png')] sm:bg-cover sm:bg-center
                    sm:flex sm:items-center sm:ml-12 hidden">
                </div>
                </div>
            </main>
        </>
    )
}

export default Home