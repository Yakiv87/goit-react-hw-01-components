import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
// import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './JSON/user.json';
import statisticalData from './JSON/data.json';
import friends from './JSON/friends.json';
import transactions from './JSON/transactions.json';

export const App = () => {
  return (
    <div>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
  );
};
