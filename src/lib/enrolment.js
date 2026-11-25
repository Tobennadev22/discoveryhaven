import { COMMUNITY_HREF } from "../data/site";

// Course enrolment states (see COURSES[].enrolment in data/content.js).
//
//   between  : Between cohorts. Notify me about the next cohort.
//   open     : Enrolment open. Needs a current campaignUrl, otherwise the
//              course is treated as "between" so no dead link is shown.
//   full     : This group is full. Waitlist if one exists, else updates.
//   finished : This cohort has ended. Programme updates.
//
// Returns { status, label, action: { label, href } }.
export function enrolmentState(course) {
  const e = course?.enrolment || {};
  const updates = e.notifyUrl || COMMUNITY_HREF;

  if (e.status === "open" && e.campaignUrl) {
    return {
      status: "open",
      label: "Enrolment open",
      action: { label: "See dates, fee and registration", href: e.campaignUrl },
    };
  }
  if (e.status === "full") {
    return {
      status: "full",
      label: "This group is full",
      action: e.waitlistUrl
        ? { label: "Join the waitlist", href: e.waitlistUrl }
        : { label: "Get programme updates", href: COMMUNITY_HREF },
    };
  }
  if (e.status === "finished") {
    return {
      status: "finished",
      label: "This cohort has ended",
      action: { label: "Get programme updates", href: COMMUNITY_HREF },
    };
  }
  return {
    status: "between",
    label: "Between cohorts",
    action: { label: "Notify me about the next cohort", href: updates },
  };
}

// True only when the course's own campaign checkout may be shown.
export function isCampaignOpen(course) {
  return enrolmentState(course).status === "open";
}
