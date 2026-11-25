import { Mail, Phone, CalendarDays } from "lucide-react";
import { ButtonLink } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { motion, fadeUp, stagger, scaleIn, useViewport } from "../components/ui/Motion";
import { Seo } from "../components/Seo";
import { BRAND, BOOK_A_CALL } from "../data/content";

// The old message form showed "Message Received!" without sending anything.
// Until an approved form destination is connected and delivery is tested,
// this page offers only channels that are known to work.
// Social links are left out until their exact profile URLs are confirmed.
const phoneHref = `tel:+${BRAND.phoneNumber.replace(/\D/g, "").replace(/^2340/, "234")}`;

export default function Contact() {
  const channels = [
    {
      Icon: Mail,
      title: "Email",
      body: "Write to us about programmes, partnerships, press or anything else.",
      href: `mailto:${BRAND.email}`,
      cta: BRAND.email,
    },
    {
      Icon: Phone,
      title: "Phone",
      body: "Call or message us during working hours (WAT).",
      href: phoneHref,
      cta: BRAND.phoneNumber,
    },
    {
      Icon: CalendarDays,
      title: "Book a call",
      body: "Want help choosing a programme or exploring a partnership? Pick a time to talk with us.",
      href: BOOK_A_CALL.href,
      cta: "Pick a time",
    },
  ];

  return (
    <>
      <Seo title="Contact" description={"Get in touch with Discovery Haven by email or phone, or book a call."} />
      <section className="bg-cream pt-36 pb-12 lg:pt-44 lg:pb-16">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-cherry text-h1 text-dark mb-6">Get in touch</h1>
          <p className="text-dark/80 font-body text-lead">
            We’d love to hear from you. Choose the way that suits you best.
          </p>
        </motion.div>
      </section>

      <section className="pb-20 md:pb-28 bg-cream">
        <motion.ul
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={useViewport}
        >
          {channels.map(({ Icon, title, body, href, cta }) => (
            <motion.li
              key={title}
              variants={scaleIn}
              className="flex flex-col rounded-4xl border-2 border-dark bg-white p-7"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac text-dark">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h2 className="font-body font-extrabold text-h4 text-dark mb-2">
                {title}
              </h2>
              <p className="font-body text-dark/80 mb-6">{body}</p>
              <ButtonLink
                to={href}
                variant="outline-dark"
                className="mt-auto w-full [overflow-wrap:anywhere]"
              >
                {cta}
              </ButtonLink>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </>
  );
}
