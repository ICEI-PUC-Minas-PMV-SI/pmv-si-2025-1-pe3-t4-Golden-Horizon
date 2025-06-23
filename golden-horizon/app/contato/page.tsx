'use client';

import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";

export default function ContatoPage() {
  const [form, setForm] = useState({ email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFeedback('Mensagem enviada com sucesso!');
        setForm({ email: '', message: '' });
      } else {
        setStatus('error');
        setFeedback(data.message || 'Erro ao enviar mensagem.');
      }
    } catch (err) {
      setStatus('error');
      setFeedback('Erro ao enviar mensagem.');
    }
  }

  return (
    <main>
      <section className="relative w-full h-[50vh] flex mb-16 items-center justify-center bg-cover bg-center bg-[url('/assets/images/externa2.jpg')] ">
        {/* O segredo está aqui ↓↓↓ */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
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

      <section className="flex flex-col md:flex-row mb-24">
        <div className="flex w-full md:w-1/2 mb-20 md:mb-0 items-center justify-center scale-120">
          <ul className="-space-y-2">
            <div className="flex items-center">
              <FaWhatsapp className="mr-2 text-xl text-black" />
              <p>
                (12)3456-7890
              </p>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2 text-xl text-black" />
              <p> (12)3456-7890 </p>
            </div>
            <div className="flex items-center ">
              <FaInstagram className="mr-2 text-xl text-black" />
              <p> @goldenhorizon </p>
            </div>
            <div className="flex items-center ">
              <CgMail className="mr-2 text-xl text-black" />
              <p> goldenhorizonreserva@gmail.com </p>
            </div>
          </ul>
        </div>

        <div className="flex w-full md:w-1/2">
          <form className="max-w-md mx-auto w-200 md:mx-0" onSubmit={handleSubmit}>
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
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                disabled={status === 'sending'}
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
                placeholder="Digite sua mensagem aqui..."
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>
            {feedback && (
              <p className={`mt-2 text-lg ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {feedback}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
