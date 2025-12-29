import { useState, type FC } from "react";

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // Using your provided Access Key
    formData.append("access_key", "150671a0-109c-4d8a-98a3-8b545da7d605");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 shadow-2xl">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-[0.95rem]">
            Whether you&apos;re exploring a new product, looking for a frontend
            specialist, or just want to chat about web engineering, I&apos;m
            happy to talk. Feel free to reach out via the form or through my
            links below.
          </p>

          <dl className="mt-6 space-y-3 text-sm text-slate-200">
            <div className="flex items-center gap-3">
              <span className="pill-badge border-slate-700/80 bg-slate-900/80 text-[0.72rem] text-cyan-200">
                Email
              </span>
              <a
                href="mailto:abderahmansaeed7@gmail.com"
                className="text-sm text-sky-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
                abderahmansaeed7@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="pill-badge border-slate-700/80 bg-slate-900/80 text-[0.72rem] text-cyan-200">
                GitHub
              </span>
              <a
                href="https://github.com/abderahman856"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
                github.com/abderahman856
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="pill-badge border-slate-700/80 bg-slate-900/80 text-[0.72rem] text-cyan-200">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/abderahman-sa-eed-391a0037b/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
               linkedin.com/in/abderahman-sa-eed
              </a>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Simple brief
            </span>
          </div>
          <p className="text-xs text-slate-400 sm:text-[0.8rem]">
            I’m currently open to new opportunities and collaborations. Send me
            a message below—I&apos;ll get back to you as soon as possible.
          </p>

          <form className="mt-2 space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name" // Added name attribute
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="topic">
                What would you like to work on?
              </label>
              <input
                id="topic"
                name="topic" // Added name attribute
                required
                placeholder="E.g. frontend role, dashboard project..."
                className="w-full rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-500/50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Added name attribute
                required
                rows={3}
                placeholder="I'd love to hear about your project goals..."
                className="w-full resize-none rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {isSuccess && (
              <p className="mt-2 text-center text-xs font-medium text-emerald-400">
                Success! I have received your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
