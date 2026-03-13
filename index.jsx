import { useEffect } from "react";

export default function ALXLeadGenerationWebsite() {
  useEffect(() => {
    // Meta Pixel tracking
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      // Replace with your real Pixel ID
      fbq("init", "2016934758885599");
      fbq("track", "PageView");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">ALX Ads Agency</p>
            <p className="text-sm text-slate-500">Meta Ads & Lead Generation for local businesses</p>
          </div>
          <a
            href="https://calendly.com/al386675/life-desicion"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-5 py-3 bg-slate-900 text-white text-sm font-medium shadow-sm"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Lead Generation Agency</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We help local businesses get more clients with Meta Ads.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              We create Facebook and Instagram ad campaigns that help local businesses generate more calls, appointments, and qualified leads.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl px-6 py-3 bg-slate-900 text-white font-medium">
                Get More Leads
              </a>
              <a href="#services" className="rounded-2xl px-6 py-3 border border-slate-300 font-medium">
                View Services
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            <p className="text-sm font-semibold text-slate-500 mb-3">What we help with</p>
            <div className="space-y-4">
              {[
                'Facebook & Instagram Ads',
                'Lead generation campaigns',
                'Landing pages and forms',
                'Retargeting setup',
                'Appointment booking funnels',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white border border-slate-200 px-4 py-4">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="max-w-2xl mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold">What we do for businesses</h2>
              <p className="mt-4 text-slate-600 text-lg leading-8">
                Simple, focused services designed to bring in more calls, more messages, and more booked appointments.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Meta Ads Management',
                  text: 'Campaign setup, audience testing, ad optimization, and budget management.'
                },
                {
                  title: 'Lead Generation Funnels',
                  text: 'High-converting landing pages and lead forms built to collect real prospects.'
                },
                {
                  title: 'Follow-Up Systems',
                  text: 'Automations and CRM systems to help businesses respond to leads faster.'
                },
              ].map((card) => (
                <div key={card.title} className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-4 text-slate-600 leading-7">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold">A simple 3-step system</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['1. Strategy', 'We identify your offer, audience, and the best campaign goal for your business.'],
              ['2. Launch', 'We build the ads, lead form or landing page, and start the campaign.'],
              ['3. Optimize', 'We track performance, improve results, and help turn leads into customers.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-slate-200 p-8">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to get more leads?</h2>
              <p className="mt-4 text-slate-300 text-lg leading-8">
                Tell us about your business and we’ll show you how Meta Ads can help you get more calls, messages, and appointments.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white text-slate-900 p-8 shadow-sm">
              <p className="text-lg font-semibold mb-4">Book a Free Meta Ads Strategy Call</p>
              <p className="text-slate-600 mb-6">
                Click the button below to schedule a consultation and talk about how we can help your business get more leads with Meta Ads.
              </p>
              <a
                href="https://calendly.com/al386675/life-desicion"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-2xl px-6 py-3 bg-slate-900 text-white font-medium"
              >
                Book Your Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
