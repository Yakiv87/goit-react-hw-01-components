import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './jsons/user.json';
import statisticalData from './jsons/data.json';
import friends from './jsons/friends.json';
import transactions from './jsons/transactions.json';
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
