import { useAppDispatch, useAppSelector } from '../../store';
import { fetchUsers, selectUsers } from './usersSlice.ts';
import { useEffect } from 'react';
import { Card } from '../../components/card/Card.tsx';

export function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Card>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <span style={{ fontWeight: 'lighter', fontSize: '2rem' }}>{user.id}</span>
            <span style={{ fontWeight: 'bolder', fontSize: '1rem' }}>{user.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
