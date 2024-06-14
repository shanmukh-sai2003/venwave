import step1 from '../../assets/step1.svg';
import step2 from '../../assets/step2.svg';
import step3 from '../../assets/step3.svg';
import howItWorksImage from '../../assets/howItWorks.jpg';

function HowItWorks() {
    return (
        <>
            <section className='flex ml-[200px] justify-between gap-20 mb-10'>
                <div>
                    <h1 className='font-semibold text-4xl'>How It <span className="text-[#53B053]">Works?</span></h1>
                    <div className='my-10'>
                        <div className='flex my-8 items-center justify-center'>
                            <div className='w-[20%] flex justify-center'>
                                <img src={step1} alt="Tell Us Your Needs" className='w-fit h-fit'/>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='font-semibold text-xl my-2'>Tell Us Your Needs:</h2>
                                <p className='text-[#212529] text-sm'>Fill out a simple form outlining your consultancy requirements and budget constraints.</p>
                            </div>
                        </div>
                        <div className='flex my-8 items-center'>
                            <div className='w-[20%] flex justify-center'>
                                <img src={step2} alt="Discover Matches" className='w-fit h-fit'/>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='font-semibold text-xl my-2'>Discover Matches:</h2>
                                <p className='text-[#212529] text-sm'>Our algorithm matches you with consultancy firms that meet your criteria.</p>
                            </div>
                        </div>
                        <div className='flex my-8 items-center'>
                            <div className='w-[20%] flex justify-center'>
                                <img src={step3} alt="Connect and Collaborate" className='w-fit h-fit'/>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='font-semibold text-xl my-2'>Connect and Collaborate:</h2>
                                <p className='text-[#212529] text-sm'>Engage directly with consultancy firms, compare proposals, and choose the best fit for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[80%]'>
                    <img src={howItWorksImage} alt="image" className='w-[100%] rounded-tl-[300px]'/>
                </div>
            </section>
        </>
    );
}

export default HowItWorks;