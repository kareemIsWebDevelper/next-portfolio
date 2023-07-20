import {useState} from "react";
import {ScrollAnimation} from "@/app/utils/ScrollAnimation";

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	return (
		<ScrollAnimation>
			<section id="contact">
				<h1 className="header">Contact Me</h1>
				<form className="form">
					<label>Your Name:</label>
					<input
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
					/>
					<label>Your Message:</label>
					<textarea
						onChange={(e) => setMessage(e.target.value)}
						rows={3}
						cols={6}
						placeholder="Enter your message"
					/>
					<button type="submit" id="submit">Send</button>
				</form>
			</section>
		</ScrollAnimation>
	)
}