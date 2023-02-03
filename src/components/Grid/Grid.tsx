import splitArray from '@libs/splitArray';
import { Row, Col, Space } from 'antd';
import { ReactNode } from 'react';

export type GridProps<T> = {
  data: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  itemsByRow?: number;
  cellClassName?: string;
  rowClassName?: string;
};

const Grid = <T extends { id: string }>({
  data,
  itemsByRow = 3,
  renderItem,
  cellClassName,
  rowClassName,
  keyExtractor,
}: GridProps<T>) => {
  const splitData = splitArray(data, itemsByRow);

  return (
    <Space direction="vertical" className='flex flex-1 w-full'>
      {splitData.map((row) => (
        <Row key={crypto.randomUUID()} className={rowClassName}>
          {row.map((item) => (
            <Col key={keyExtractor(item)} className={cellClassName}>
              {renderItem(item)}
            </Col>
          ))}
        </Row>
      ))}
    </Space>
  );
};

export default Grid;
