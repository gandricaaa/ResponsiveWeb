import React from 'react';

function Hero() {
	return (
		<div className='container mx-auto mt-[59px] px-[20px] lg:px-[0px]'>
			<h2 className='text-[28px] lg:text-[48px] dark:text-white text-mainBlue font-extrabold  lg:w-[80%] mx-auto text-center'>
				We are creative agency capable of creating outstanding designs
				and websites
			</h2>
			<p className='dark:text-lightGray text-center mt-5'>
				with Immodev Reach more customers and grow your business
				potential online by building a website with us
			</p>
			<div className='flex justify-center gap-5 mt-10 py-[20px] flex-col lg:flex-row'>
				<button className='bg-mainBlue text-white px-[87px] py-[16px] dark:bg-white dark:border dark:border-lightGray dark:text-mainBlue'>
					Consult now
				</button>
				<button className='bg-white text-mainBlue px-[87px] py-[16px] border border-mainBlue dark:bg-mainBlue dark:text-white dark:border-lightGray'>
					About Us
				</button>
			</div>
		</div>
	);
}
export default Hero;
