

function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
      <nav><h2 className="m-4 -2 font-bold text-2xl">Social ..</h2></nav>
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
 
				<h2 className="text-2xl md:text-4xl lg:text-6xl  uppercase">Welcome to  </h2>
        
        
       
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black  mb-8">The <span className="text-[#00df9a]">Social</span> Project</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">Connect with like-minded individuals and create change</p>
        

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					500+ Active members..
				</div>

				<form 
					action="https://us8.list-manage.com/contact-form?u=66f38935483498233db178917&form_id=d4d69b5c4724b02ea5f350dc66bf7dec" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-[#00df9a] md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with Social's <span className="hover:opacity-80 duration-150 hover:underline">Terms of Service</span> and <span  className="hover:opacity-80 duration-150 hover:underline">Privacy Policy</span>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xs">&lt;/&gt;  with ❤️ by Subham Saha</p>

					<div className="flex -mx-6">
						<a href="https://github.com/subhams56" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="https://us8.list-manage.com/contact-form?u=66f38935483498233db178917&form_id=d4d69b5c4724b02ea5f350dc66bf7dec" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App