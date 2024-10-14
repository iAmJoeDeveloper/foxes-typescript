type Props = { image: string }

// Typing what the function is returning
export const RandomFox = ({ image }: Props): JSX.Element => {
	return <img width={320} height='auto' src={image} className='rounded' />
}

// Implicit Form
// export const RandomFox = () =>{
//     return <img/>
// }

// import type { FunctionComponent, FC } from 'react'

// Typing the constant
// export const RandomFox: FunctionComponent = ()  => {
// 	return <img />
// }

// export const RandomFox: FC = ()=> {
// 	return <img />
// }
