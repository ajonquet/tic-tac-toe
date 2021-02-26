import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function Player({ value }) {
  switch (value) {
    case 0:
      return <FontAwesomeIcon icon={faTimes} size="2x" />;
    case 1:
      return <FontAwesomeIcon icon={faCircle} size="2x" />;
    default:
      return null;
  }
}

export default Player;
