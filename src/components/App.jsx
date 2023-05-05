import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import userData from 'user.json';
import statisticsData from 'data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />
    </>
  );
};
