import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendlistItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} id={id} key={id}>
      <span
        className={`${css.status} ${
          isOnline === true ? css.online : css.offline
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendlistItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
