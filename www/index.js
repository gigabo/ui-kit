import React from 'react'
import Button from './components/Button.js'
import './styles/index.css'

export default class SimplePage {
	getElements () {
		return (
		<div>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<hr/>
			<Button>Click Me</Button>
			<Button href="/transition">Love Me</Button>
			<Button href="/transition" clientTransition={true} reuseDom={true}>Press my Buttons</Button>
		</div>);
	}
}
