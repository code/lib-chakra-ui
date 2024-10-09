import { createComponent } from "./create-component"

export const TooltipAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x={132}
        y={93.9951}
        width={136}
        height={43.9596}
        rx={8.24242}
        fill={palette[5]}
      />
      <rect
        x={160.849}
        y={110.48}
        width={78.303}
        height={10.9899}
        rx={5.49495}
        fill={palette[3]}
      />
      <path
        d="M258.381 133.103C257.747 132.909 257.176 133.038 256.731 133.2C256.35 132.746 255.716 132.325 254.89 132.325C254.256 132.325 253.716 132.519 253.304 132.714C252.828 132.098 252.066 131.514 250.923 131.514C250.289 131.514 249.781 131.708 249.337 131.936V127.46C249.337 126.163 248.48 124.217 246.163 124.217C243.847 124.217 242.99 126.163 242.99 127.46V136.541L242.799 136.346C242.672 136.184 241.403 134.692 239.785 134.757C238.261 134.79 237.309 135.438 236.706 136.865C235.976 138.617 236.77 139.33 236.992 139.492C237.595 139.914 238.197 140.465 238.261 140.692C238.356 140.984 238.896 142.573 239.943 144.13C240.356 144.746 240.895 145.2 241.276 145.557C241.403 145.686 241.53 145.784 241.625 145.881C241.72 145.978 241.879 146.14 242.038 146.303C242.387 146.627 242.8 147.049 243.181 147.47C243.498 147.859 244.228 149.448 244.64 150.486C244.767 150.778 245.053 151.005 245.37 151.005H256.478C256.763 151.005 256.985 150.876 257.144 150.616C257.271 150.389 260.444 145.297 260.444 142.087V136.249C260.444 134.563 259.714 133.525 258.381 133.103L258.381 133.103ZM258.857 142.054C258.857 144.162 256.985 147.729 256.033 149.351H245.878C245.529 148.508 244.83 146.951 244.354 146.4C243.942 145.913 243.497 145.492 243.117 145.103C242.958 144.94 242.831 144.843 242.736 144.713C242.609 144.584 242.482 144.454 242.291 144.324C241.942 144.032 241.53 143.643 241.244 143.222C240.514 142.151 239.975 140.919 239.752 140.173C239.498 139.394 238.419 138.551 237.975 138.195C237.975 138.098 238.007 137.87 238.166 137.481C238.515 136.638 238.927 136.379 239.848 136.346H239.88C240.609 136.346 241.371 137.06 241.625 137.384L243.212 139.167C243.434 139.427 243.783 139.492 244.1 139.394C244.417 139.265 244.608 138.973 244.608 138.648L244.608 127.46C244.608 127.201 244.672 125.839 246.195 125.839C247.655 125.839 247.782 127.071 247.782 127.46V136.379C247.782 136.833 248.131 137.19 248.575 137.19C249.02 137.19 249.369 136.833 249.369 136.379V134.044C249.591 133.752 250.162 133.136 250.955 133.136C251.717 133.136 252.098 133.72 252.225 133.947V136.379C252.225 136.834 252.574 137.19 253.018 137.19C253.463 137.19 253.812 136.834 253.812 136.379V134.336C254.034 134.174 254.446 133.947 254.923 133.947C255.367 133.947 255.621 134.271 255.716 134.466V136.379C255.716 136.833 256.065 137.19 256.51 137.19C256.954 137.19 257.303 136.833 257.303 136.379V134.725C257.494 134.628 257.716 134.563 257.938 134.628C258.382 134.79 258.89 135.017 258.89 136.217V142.054L258.857 142.054Z"
        fill="black"
      />
      <path
        d="M246.028 124.22C246.025 124.22 246.022 124.22 246.018 124.22L246.024 124.217L246.028 124.22Z"
        fill={palette[0]}
      />
      <path
        d="M256.036 149.351C256.988 147.729 258.861 144.162 258.861 142.054L258.893 142.054V136.217C258.893 135.017 258.386 134.79 257.941 134.628C257.719 134.563 257.497 134.628 257.307 134.725V136.379C257.307 136.833 256.958 137.19 256.513 137.19C256.069 137.19 255.72 136.833 255.72 136.379V134.466C255.624 134.271 255.371 133.947 254.926 133.947C254.45 133.947 254.037 134.174 253.815 134.336V136.379C253.815 136.834 253.466 137.19 253.022 137.19C252.577 137.19 252.228 136.834 252.228 136.379V133.947C252.101 133.72 251.72 133.136 250.959 133.136C250.166 133.136 249.594 133.752 249.372 134.044V136.379C249.372 136.833 249.023 137.19 248.579 137.19C248.134 137.19 247.785 136.833 247.785 136.379V127.46C247.785 127.071 247.658 125.839 246.198 125.839C244.675 125.839 244.612 127.201 244.612 127.46L244.611 138.648C244.611 138.973 244.421 139.265 244.104 139.394C243.786 139.492 243.437 139.427 243.215 139.167L241.628 137.384C241.375 137.06 240.613 136.346 239.883 136.346H239.851C238.931 136.379 238.518 136.638 238.169 137.481C238.011 137.87 237.979 138.098 237.979 138.195C237.995 138.208 238.012 138.221 238.03 138.236C238.501 138.613 239.511 139.423 239.756 140.173C239.978 140.919 240.518 142.151 241.248 143.222C241.533 143.643 241.946 144.032 242.295 144.324C242.485 144.454 242.612 144.584 242.739 144.713C242.8 144.796 242.874 144.866 242.962 144.948C243.01 144.994 243.063 145.044 243.12 145.103C243.213 145.197 243.309 145.294 243.408 145.393C243.715 145.701 244.046 146.032 244.358 146.4C244.834 146.951 245.532 148.508 245.881 149.351H256.036Z"
        fill={palette[0]}
      />
      <rect x={74} y={162} width={252} height={47} rx={6} fill={palette[3]} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93 185.5C93 183.015 94.9077 181 97.2611 181H302.739C305.092 181 307 183.015 307 185.5C307 187.985 305.092 190 302.739 190H97.2611C94.9077 190 93 187.985 93 185.5Z"
        fill={palette[15]}
      />
      <path
        d="M198.586 152.414C199.367 151.633 200.633 151.633 201.414 152.414L211 162H189L198.586 152.414Z"
        fill={palette[3]}
      />
    </svg>
  )
})
