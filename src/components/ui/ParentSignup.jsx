import { useId, useState } from "react";
import { Button, ButtonLink } from "./Button";
import { SITE } from "../../data/site";

const INPUT =
  "min-h-[52px] w-full rounded-full border-2 border-dark bg-white px-6 py-3.5 font-body text-dark placeholder:text-dark/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-aqua/50";
const LABEL = "mb-2 block font-body text-sm font-extrabold text-dark";

// The one Discovery Haven Parent Community signup, open to all parents.
//
// - When SITE.communityOptInUrl is set, this shows a button to the hosted
//   Systeme.io opt-in page (the recommended setup).
// - Until then, it uses the site's own form, which posts to /api/subscribe.
//   That saves the contact in Systeme.io with the community and source
//   tags, and only shows success once Systeme.io has confirmed it.
//
// When the 15-15-15 guide and its delivery email are tested, add the guide
// here and change the button to "Send me the guide".
export function ParentSignup({
  heading = "Bring a little discovery home.",
  headingLevel = "h2",
  className = "",
}) {
  const id = useId();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const Heading = headingLevel;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, website }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      setEmail("");
      setFirstName("");
    } catch {
      setStatus("error");
    }
  }

  const privacy = SITE.privacyUrl ? (
    <p className="mt-5 text-center font-body text-sm text-dark/80">
      We’ll email you activities, ideas and programme updates. You can
      unsubscribe at any time. Read our{" "}
      <a
        href={SITE.privacyUrl}
        className="font-bold text-dark underline underline-offset-4"
      >
        privacy notice
      </a>
      .
    </p>
  ) : (
    <p className="mt-5 text-center font-body text-sm text-dark/80">
      We’ll email you activities, ideas and programme updates. You can
      unsubscribe at any time.
    </p>
  );

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={`bg-yellow py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Heading
          id={`${id}-heading`}
          className="font-cherry text-h2 text-dark mb-4"
        >
          {heading}
        </Heading>
        <p className="font-body text-lead text-dark/80 mb-9">
          Join the Discovery Haven Parent Community for simple activities to
          try together, ideas for raising confident young leaders and updates
          on upcoming programmes.
        </p>

        {SITE.communityOptInUrl ? (
          <>
            <ButtonLink to={SITE.communityOptInUrl} variant="primary" size="lg">
              Join the parent community
            </ButtonLink>
            {privacy}
          </>
        ) : status === "done" ? (
          <p
            role="status"
            className="rounded-3xl border-2 border-dark bg-white px-6 py-5 font-body text-lg font-extrabold text-dark shadow-press"
          >
            You’re in! Look out for a welcome email from Discovery Haven.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-first`} className={LABEL}>
                  First name <span className="font-semibold">(optional)</span>
                </label>
                <input
                  id={`${id}-first`}
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={INPUT}
                />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={LABEL}>
                  Your email address
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={status === "error" ? "true" : undefined}
                  aria-describedby={
                    status === "error" ? `${id}-error` : undefined
                  }
                  className={INPUT}
                  placeholder="name@example.com"
                />
              </div>
            </div>
            {/* Honeypot for bots: hidden from people and screen readers. */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor={`${id}-website`}>Website</label>
              <input
                id={`${id}-website`}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="mt-4 text-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Joining…" : "Join the parent community"}
              </Button>
            </div>
            <p
              id={`${id}-error`}
              role="alert"
              className="mt-4 min-h-[1.5rem] text-center font-body text-sm font-bold text-dark"
            >
              {status === "error"
                ? "We couldn’t submit your details. Check your email address and try again."
                : ""}
            </p>
            {privacy}
          </form>
        )}
      </div>
    </section>
  );
}
