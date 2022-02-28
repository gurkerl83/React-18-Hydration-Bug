import { FC } from 'react';

import { Media } from './Media';

export const Segment: FC = ({ children }) => {
  return (
    <>
      <Media lessThan='md'>
        {(className, renderChildren) => {
          return (
            <SegmentMobile
              renderChildren={renderChildren}
              className={className}
            >
              {children}
            </SegmentMobile>
          )
        }}
      </Media>
      <Media greaterThanOrEqual='md'>
        {(className, renderChildren) => {
          return (
            <SegmentDesktop
              renderChildren={renderChildren}
              className={className}
            >
              {children}
            </SegmentDesktop>
          )
        }}
      </Media>
    </>
  )
}

export const SegmentDesktop: FC<{
  className: string
  renderChildren: boolean
}> = ({ className, renderChildren, children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff00',
        border: '1px solid #000000'
      }}
      className={className}
      suppressHydrationWarning={!renderChildren}
    >
      {renderChildren && <h3>{children}</h3>}
    </div>
  )
}

export const SegmentMobile: FC<{
  className: string
  renderChildren: boolean
}> = ({ className, renderChildren, children }) => {
  return (
    <div
      style={{
        width: '50%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000ff',
        border: '1px solid #000000'
      }}
      className={className}
      suppressHydrationWarning={!renderChildren}
    >
      {renderChildren && <h4>{children}</h4>}
    </div>
  )
}
