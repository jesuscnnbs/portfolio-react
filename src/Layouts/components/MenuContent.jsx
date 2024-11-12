import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function MenuContent({side}) {
  return (
    <ul className={classNames("menu ", {"menu-horizontal": !side}, {"bg-base-200 min-h-full max-w-[90%] w-80 p-4": side})}>
      {/* Navbar menu content here */}
      <li><a>EDUCATION</a></li>
      <li><a>EXPERIENCE</a></li>
      <li><a>ABOUT</a></li>
    </ul>
  )
}

MenuContent.propTypes = {
  side: PropTypes.bool,
}