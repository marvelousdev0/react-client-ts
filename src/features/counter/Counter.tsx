import { useAppSelector } from '../../store';
import { selectCount, selectLoading } from './counterSlice.ts';
import { Card } from '../../components/card/Card.tsx';
import { Actions } from './Actions.tsx';
import { useMemo } from 'react';

export function Counter() {
  const count = useAppSelector(selectCount);
  const loading = useAppSelector(selectLoading);

  const renderActions = useMemo(() => {
    if (loading) {
      return <span>Loading...</span>;
    }
    return <Actions />;
  }, [loading]);

  return (
    <Card>
      <span style={{ fontWeight: 'bolder', fontSize: '5rem' }}>{count}</span>
      {renderActions}
    </Card>
  );
}
