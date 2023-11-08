import css from 'index.css';

import { Profile } from './Profile/Profile';
import user from '../jsons/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../jsons/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../jsons/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../jsons/transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};