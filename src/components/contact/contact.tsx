"use client";
import { FC, useState } from "react";
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    emailjs
      .send(
        "service_xd4s1vf",
        "template_z8flvsj",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "WdcddPmaw6Z9AACtO"
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSending(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="max-w-3xl rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Nom
              </label>
              <input
                type="text"
                name="name"
                placeholder="Entrer votre nom"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-b bg-[#FAF3E0] border-blue-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Adresse Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Entrer votre adresse email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-b bg-[#FAF3E0] border-blue-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Entrer votre message"
              required
              className="w-full border-b bg-[#FAF3E0] border-blue-500 focus:outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={sending}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {sending ? "Envoi..." : "Envoyer"}
            </button>
          </div>

          {success === true && (
            <p className="text-green-600 text-center">
              Message envoyé avec succès !
            </p>
          )}
          {success === false && (
            <p className="text-red-600 text-center">
              Échec de l'envoi. Réessayez plus tard.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
