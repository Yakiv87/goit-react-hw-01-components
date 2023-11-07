import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )}
      <img className={css.avatatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};



// const FriendList = ({ friends }) => {
//   return (
//     <ul className={styles.friendList}>
//       {friends.map(item => (
//         <FriendListItem
//           avatar={item.avatar}
//           name={item.name}
//           isOnline={item.isOnline}
//           key={item.id}
//         />
//       ))}
//     </ul>
//   );
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default FriendList;