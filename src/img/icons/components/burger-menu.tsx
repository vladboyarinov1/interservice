import { IconProps, IconWrapper } from '@/img/icons/icon-wrapper'

export const BurgerMenu = (allProps: IconProps) => {
  const { height, svgProps: props, width, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={height}
          viewBox={'0 0 27 20'}
          width={width}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <rect fill={'url(#paint0_linear_22_18)'} height={'2.6087'} width={'27'} />
          <rect fill={'url(#paint1_linear_22_18)'} height={'2.6087'} width={'27'} y={'8.69531'} />
          <rect fill={'url(#paint2_linear_22_18)'} height={'2.6087'} width={'27'} y={'17.3916'} />
          <defs>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint0_linear_22_18'}
              x1={'1.5'}
              x2={'2.56166'}
              y1={'4.58873e-09'}
              y2={'6.51159'}
            >
              <stop stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint1_linear_22_18'}
              x1={'1.5'}
              x2={'2.56166'}
              y1={'8.69531'}
              y2={'15.2069'}
            >
              <stop stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint2_linear_22_18'}
              x1={'1.5'}
              x2={'2.56166'}
              y1={'17.3916'}
              y2={'23.9032'}
            >
              <stop stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
