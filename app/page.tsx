'use client'
import type { MouseEventHandler } from 'react'
import { useState } from 'react'
import { RandomFox } from './components/RandomFox'

const random = () => Math.floor(Math.random() * 123) + 1

type ImageItem = { id: string; url: string }

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

export default function Home() {
	const [images, setImages] = useState<Array<ImageItem>>([])

	const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()

		const newImageItem: ImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${random()}.jpg`,
		}

		setImages([...images, newImageItem])
	}

	return (
		<div>
			<main>
				<h1 className='text-3xl font-bold'>Hello, JoeDev</h1>
				<button className='p-2 bg-purple-400 text-white font-bold rounded-sm' onClick={addNewFox}>
					Add new fox
				</button>
				{images.map((item) => (
					<div className='p-4' key={item.id}>
						<RandomFox image={item.url} />
					</div>
				))}
			</main>
			<footer></footer>
		</div>
	)
}
