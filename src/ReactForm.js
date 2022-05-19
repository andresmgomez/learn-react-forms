// import logo from './logo.svg';
import './App.css';

function ReactForm() {
	return (
		<section className='App'>
			<h1>Hi, I'm YourName This is my online form</h1>
			{/* Scenario: Let's think you have to fill a form
      the first time you are signing up to a College */}
			<form method='post' className='App-header'>
				<label htmlFor='firstName'>
					First Name:
					<input
						onChange={event => console.log('First name: ', event.target.value)}
						type='text'
						name='firstName'
						placeholder='Your First name'
					/>
				</label>
				<br />
				<label htmlFor='lastName'>
					Last Name:
					<input
						onChange={event => console.log('Last name: ', event.target.value)}
						type='text'
						name='lastName'
						placeholder='Your Last name'
					/>
				</label>
				<br />
				<label htmlFor='address'>
					Address:
					<input
						onChange={event => console.log('Address: ', event.target.value)}
						type='text'
						name='address'
						placeholder='What is your Address?'
					/>
				</label>
				<br />
				<label htmlFor='zipCode'>
					Zip:
					<input
						onChange={event => console.log('Zip Code: ', event.target.value)}
						type='number'
						name='zipCode'
						placeholder='What is your Zip code?'
					/>
				</label>
				<br />
				<label>
					State:
					<select
						onChange={event => console.log('US State: ', event.target.value)}
						name='nationState'
					>
						<option selected='florida' value='florida'>
							FL
						</option>
						<option value='north-carolina'>NC</option>
						<option value='new-jersey'>NJ</option>
						<option value='texas'>TX</option>
					</select>
				</label>
				<br />
				DOB:
				<label htmlFor='birthDate'>
					<input
						onChange={event => console.log('DOB: ', event.target.value)}
						type='date'
					/>
				</label>
				<br />
				<br />
				<label htmlFor='message'>
					Your Message <br />
					<textarea
						onChange={event =>
							console.log('Your message: ', event.target.value)
						}
						name='message'
						id='message'
						cols='40'
						rows='10'
						placeholder='Any comments you would like to make...'
					></textarea>
				</label>
				<br />
				<label>
					Agree with the <strong>Terms and Conditions</strong>
					<input
						onChange={event =>
							console.log('Agree with terms: ', event.target.value)
						}
						type='checkbox'
						name='agree'
					/>
				</label>
				<br />
				<button type='submit' disabled={false}>
					Submit
				</button>
			</form>
		</section>
	);
}

export default ReactForm;
