function Player({ value }) {
  switch (value) {
    case 0:
      return 'X';
    case 1:
      return 'O';
    default:
      return null;
  }
}

export default Player;
