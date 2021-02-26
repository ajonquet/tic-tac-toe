import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function Player({ value }) {
  if (Number.isInteger(value)) {
    return <FontAwesomeIcon icon={ (value%2) ? faCircle : faTimes} size="2x" />;
  }
  return null;
  /*
  switch (value) {
    case 0:
      return <FontAwesomeIcon icon={faTimes} size="2x" />;
    case 1:
      return <FontAwesomeIcon icon={faCircle} size="2x" />;
    default:
      return null;
  }
  */
}

export default Player;
