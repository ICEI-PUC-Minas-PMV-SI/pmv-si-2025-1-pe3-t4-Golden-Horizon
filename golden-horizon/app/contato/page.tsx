import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";

export default function ContatoPage() {
  return (
    <main>
        <section className="relative w-full h-[50vh] flex mb-16 items-center justify-center bg-cover bg-center bg-[url('/assets/images/externa2.jpg')] ">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-white text-4xl sm:text-5xl font-bold">
                Contate-nos
                </h1>
                <p className="text-white text-lg md:text-xl max-w-2x1 mx-auto">
                Ainda tem dúvidas? Mande uma mensagem no nosso WhatsApp pelo botão abaixo, ou nos envie um e-mail utilizando o formulário também abaixo.
                </p>
                <p className="text-white text-lg md:text-xl max-w-2x1 mx-auto">
                Aproveite também para verificar nossas redes sociais!
                </p>
            </div>
        </section>

        <section className="flex items-center justify-center pb-16 mb-16">
            <div className="flex h-20 w-160 border bg-[#F0F0F0] border-gray-300 rounded-full focus:outline-none">
                <input type="text" placeholder="Sua mensagem" className="block text-[#838383] px-12"/>
                <button type="button" className="flex-none ml-auto h-20 w-30 text-white bg-[#3BB77E] rounded-full">
                    Enviar
                </button>
            </div>
        </section>

        <section className="flex flex-col md:flex-row mb-24">
            <div className="flex w-full md:w-1/2 mb-20 md:mb-0 items-center justify-center scale-120">
                <ul className="-space-y-2">
                    <div className="flex items-center">
                        <FaWhatsapp className="mr-2 text-xl text-black"/>
                        <p>
                            (12)3456-7890
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FiPhone className="mr-2 text-xl text-black"/>
                        <p> (12)3456-7890 </p>
                    </div>
                    <div className="flex items-center ">
                        <FaInstagram className="mr-2 text-xl text-black"/>
                        <p> @goldenhorizon </p>
                    </div>
                    <div className="flex items-center ">
                        <CgMail className="mr-2 text-xl text-black"/>
                        <p> goldenhorizon@gmail.com </p>
                    </div>
                </ul>
            </div>

            <div className="flex w-full md:w-1/2">
                <form className="max-w-md mx-auto w-200 md:mx-0">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-2xl font-medium mb-1">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="exemplo@provedor.com"
                        required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-2xl font-medium mb-1">
                        Mensagem
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Type your message here..."
                        required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                    >
                        Enviar
                    </button>
                    </form>
            </div>
        </section>

        {/* <section className="flex">
            <div >
                <ul className="flex list-none text-sm space-y-2">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                        <FaWhatsapp className="mr-2 text-xl text-black" />
                            (12)3456-7890
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                        <FiPhone className="mr-2 text-xl text-black" />
                            (12)3456-7890
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                        <FaInstagram className="mr-2 text-xl text-black" />
                            @goldenhorizon
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                        <CgMail className="mr-2 text-xl text-black" />
                            goldenhorizon@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </section> */}
    </main>
  );
}
