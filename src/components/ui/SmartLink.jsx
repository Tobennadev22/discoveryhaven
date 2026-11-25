import { Link } from "react-router-dom";
import { isExternal } from "../../data/site";

// A link that works for both internal routes and outside URLs (Calendly,
// Systeme.io). In-page anchors and external URLs use a plain <a>.
export function SmartLink({ href, children, ...props }) {
  if (isExternal(href) || href.includes("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
