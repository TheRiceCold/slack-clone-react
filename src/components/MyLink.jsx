import {Link} from 'react-router-dom'

// What <Link> should always be
export default ({ to, children, ...props }) => {

  // If nothing to link to
  if (!to) return <span {...props}>{children}</span>

  // Intended to be an external link
  if (/^https?:\/\//.test(to)) 
    return <a href={to} {...props}>{children}</a>

  // Internal link
  return <Link to={to} {...props}>{children}</Link>
}
