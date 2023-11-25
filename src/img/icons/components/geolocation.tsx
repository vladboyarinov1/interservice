import { IconProps, IconWrapper } from '@/img/icons/icon-wrapper'

export const Geolocation = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 71 87'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M35.0438 0C15.7206 0 0 15.8049 0 35.232C0 43.248 2.61299 50.7974 7.55658 57.0642C13.9576 65.1781 32.5715 84.4436 33.3611 85.2596L35.0438 87L36.7268 85.2598C37.5162 84.4436 56.136 65.1737 62.5382 57.0572C67.4773 50.7955 70.0879 43.2484 70.0879 35.232C70.0879 15.8049 54.3673 0 35.0438 0ZM58.8602 54.1246C53.7063 60.6583 39.8659 75.1929 35.0441 80.2201C30.2228 75.1932 16.3875 60.6628 11.2348 54.1314C6.95568 48.7075 4.69455 42.1723 4.69455 35.232C4.69455 18.4074 18.3092 4.71972 35.0438 4.71972C51.7785 4.71972 65.3934 18.4074 65.3934 35.232C65.3934 42.1726 63.1341 48.7056 58.8602 54.1246Z'
            }
            fill={'url(#paint0_linear_0_250)'}
          />
          <path
            d={
              'M35.0441 13.9854C23.6061 13.9854 14.3003 23.341 14.3003 34.8404C14.3003 46.3397 23.6058 55.6954 35.0441 55.6954C46.4823 55.6954 55.7879 46.34 55.7879 34.8404C55.7881 23.3408 46.4823 13.9854 35.0441 13.9854ZM35.0441 50.9757C26.1946 50.9757 18.9948 43.7375 18.9948 34.8404C18.9948 25.9432 26.1944 18.7051 35.0441 18.7051C43.8938 18.7051 51.0933 25.9432 51.0933 34.8404C51.0936 43.7373 43.8935 50.9757 35.0441 50.9757Z'
            }
            fill={'url(#paint1_linear_0_250)'}
          />
          <path
            d={
              'M34.1847 36.4155L28.2902 31.7005L25.3672 35.3941L34.9182 43.0332L45.0897 30.3056L41.4296 27.3496L34.1847 36.4155Z'
            }
            fill={'url(#paint2_linear_0_250)'}
          />
          <defs>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint0_linear_0_250'}
              x1={'35.044'}
              x2={'35.044'}
              y1={'0'}
              y2={'87'}
            >
              <stop offset={'0.019097'} stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint1_linear_0_250'}
              x1={'35.0441'}
              x2={'35.0441'}
              y1={'13.9854'}
              y2={'55.6954'}
            >
              <stop offset={'0.019097'} stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
            <linearGradient
              gradientUnits={'userSpaceOnUse'}
              id={'paint2_linear_0_250'}
              x1={'35.2284'}
              x2={'35.2284'}
              y1={'27.3496'}
              y2={'43.0332'}
            >
              <stop offset={'0.019097'} stopColor={'#3EABFA'} />
              <stop offset={'1'} stopColor={'#054878'} />
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
