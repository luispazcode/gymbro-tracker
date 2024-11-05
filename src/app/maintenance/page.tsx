import { Dumbbell, Mail } from "lucide-react";

export default function MaintenancePage() {
	return (
		<div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4'>
			<div className='w-full max-w-md text-center'>
				<div className='flex items-center justify-center mb-6'>
					<Dumbbell className='w-12 h-12 text-[#22C55E]' />
					<h1 className='text-2xl font-bold ml-2'>Gymbro Tracker</h1>
				</div>
				<div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
					<h2 className='text-xl font-semibold mb-4'>
						We are Bulking Up Our App!
					</h2>
					<p className='text-gray-300 mb-4'>
						Gymbro Tracker is currently offline for a quick workout. We are
						adding new features to help you crush your fitness goals even
						harder!
					</p>
					<div className='bg-gray-700 rounded-lg p-4 mb-6'>
						<p className='text-lg font-semibold'>
							Expected Downtime:{" "}
							<span className='text-[#22C55E]'>In no time at all</span>
						</p>
					</div>
					<p className='text-gray-300 mb-6'>
						Thanks for your patience, bro. Keep crushing it! 💪
					</p>
					<div className='flex items-center justify-center text-sm text-gray-400'>
						<Mail className='w-4 h-4 mr-2' />
						<p>
							Need help?{" "}
							<a
								href='mailto:lpaz0073@gmail.com'
								className='text-[#22C55E] hover:underline'
							>
								lpaz0073@gmail.com
							</a>
						</p>
					</div>
					<p className='text-gray-300 mt-4 text-sm'>Creator: Luis Paz</p>
				</div>
			</div>
		</div>
	);
}
