import { IconProps, IconWrapper } from '@/img/icons/icon-wrapper'

export const Mobile = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'557'}
          viewBox={'0 0 321 557'}
          width={'321'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <rect fill={'url(#pattern0)'} height={'557'} width={'321'} />
          <defs>
            <pattern
              height={'1'}
              id={'pattern0'}
              patternContentUnits={'objectBoundingBox'}
              width={'1'}
            >
              <use
                transform={'matrix(0.000769689 0 0 0.000443573 -1.05919 -0.184919)'}
                xlinkHref={'#image0_0_102'}
              />
            </pattern>
            <image
              height={'3072'}
              id={'image0_0_102'}
              width={'4096'}
              xlinkHref={
              }
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}