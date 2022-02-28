import { FC } from 'react';

import { Segment } from '../components/Segment';

const sections = Array.from({ length: 5 }, (_, i) => i + 1)

const Index: FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {sections.map((section, index) => {
        return <Segment key={`${section}-${index}`}>{section}</Segment>
      })}
    </div>
  )
}

export default Index
