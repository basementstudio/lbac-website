import clsx from 'clsx'
import * as React from 'react'

export const Container = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={clsx('max-w-6xl 2xl:max-w-7xl mx-auto px-7', className)}
      ref={ref}
    />
  )
})

export type ContainerProps = React.ComponentProps<typeof Container>
