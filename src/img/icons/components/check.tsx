import { IconProps, IconWrapper } from '@/img/icons/icon-wrapper'

export const Check = (allProps: IconProps) => {
  const { height, svgProps: props, width, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={height}
          viewBox={'0 0 47 47'}
          width={width}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M19.5221 27.1817L13.7404 19.9718H8.78499L19.5221 34.1869L37.2146 12.4116H31.9612L19.5221 27.1817Z'
            }
            fill={'url(#paint0_linear_0_264)'}
          />
          <path
            d={
              'M41.9022 0H22.8488H2.98701C0.41564 0 0 1.06972 0 3.64042V23.2987V42.9563C0 45.5277 0.41564 46.2987 2.98701 46.2987H22.8488H43.013C45.5837 46.2987 46 45.5277 46 42.9563V23.2987V4.09407C46 1.52338 44.4729 0 41.9022 0ZM15.7416 2.27946C16.6489 2.27946 17.5562 3.03555 17.5562 4.09407C17.5562 5.15192 16.8001 5.90868 15.7416 5.90868C14.683 5.90868 13.9269 5.00138 13.9269 4.09407C13.9269 3.18677 14.683 2.27946 15.7416 2.27946ZM10.6002 2.27946C11.5075 2.27946 12.4148 3.03555 12.4148 4.09407C12.4148 5.15192 11.6594 5.90868 10.6002 5.90868C9.54096 5.90868 8.78555 5.1526 8.78555 4.09407C8.78488 3.03555 9.69286 2.27946 10.6002 2.27946ZM5.60998 2.27946C6.51729 2.27946 7.42459 3.03555 7.42459 4.09407C7.42459 5.15192 6.66851 5.90868 5.60998 5.90868C4.702 5.90868 3.79537 5.1526 3.79537 4.09407C3.79537 3.03555 4.70268 2.27946 5.60998 2.27946ZM41.9022 39.1759C41.9022 40.8406 40.5406 42.2002 38.8778 42.2002H7.12216C5.45877 42.2002 4.09848 40.8393 4.09848 39.1759V11.9574C4.09848 10.294 5.45944 8.93371 7.12216 8.93371H19.9756C23 8.93371 22.8488 8.93371 22.8488 7.42154C22.8488 5.30449 24.3603 4.39786 26.0243 4.39786H38.8772C40.5419 4.39786 41.9015 5.75882 41.9015 7.42154V39.1759H41.9022Z'
            }
            fill={'url(#paint1_linear_0_264)'}
          />
          <defs>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint0_linear_0_264'}
              x1={'22.9998'}
              x2={'22.9998'}
              y1={'12.4116'}
              y2={'34.1869'}
            >
              <stop stopColor={'#3EABFA'} />
              <stop offset={'0.979167'} stopColor={'#054878'} />
            </linearGradient>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint1_linear_0_264'}
              x1={'0'}
              x2={'23'}
              y1={'0'}
              y2={'47.4935'}
            >
              <stop stopColor={'#3EABFA'} />
              <stop offset={'0.979167'} stopColor={'#054878'} />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
