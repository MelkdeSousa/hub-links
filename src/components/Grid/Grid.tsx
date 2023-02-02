import { Row, Col, Space } from 'antd'

export type GridProps<T> = {
  data: T[]
  renderItem: (item: T) => JSX.Element
  itemsByRow?: number
  cellClassName?: string
  rowClassName?: string
}

const splitArray = <T extends unknown>(data: T[], numberSplitter: number) => {
  const dataSplitted = []

  for (let index = 0; index < data.length; index += numberSplitter) {
    dataSplitted.push(data.slice(index, index + numberSplitter))
  }

  return dataSplitted
}

const Grid = <T extends { id: string }>({ data, itemsByRow = 3, renderItem, cellClassName, rowClassName }: GridProps<T>) => {
  const dataSplitted = splitArray(data, itemsByRow)

  return (
    <Space direction='vertical'>
      {dataSplitted.map(row =>
        <Row key={crypto.randomUUID()} className={rowClassName}>
          {row.map(item => <Col key={item.id} className={cellClassName}>{renderItem(item)}</Col>)}
        </Row>
      )}
    </Space>
  )
}

export default Grid

