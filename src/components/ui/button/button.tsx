import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fs?: CSSProperties['fontSize']
  px: CSSProperties['paddingRight']
  py: CSSProperties['paddingLeft']
  variant?: 'large' | 'medium' | 'small'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fs, px, py, variant = 'primary', ...rest } = props
  const styles = {
    ...(px && { paddingLeft: px, paddingRight: px }),
    ...(py && { paddingBottom: py, paddingTop: py }),
    ...(fs && { fontSize: fs }),
  }

  return <Component className={`${s.button} ${className}`} style={styles} {...rest} />
}
