import gmailIcon from '../../assets/gmail.svg';

function LetsTalk() {
    return (
        <section className="flex my-8 justify-center px-[250px] gap-28">
            <div className='flex-1'>
                <h1 className="font-semibold text-4xl my-4 leading-[50px]">Have more questions?<span className="text-[#53BB53] font-semibold text-4xl">Let's talk</span></h1>
                <p className="text-[#1F1F1F] text-lg my-8">Our team of highly trained professionals will clear all your doubts with utmost transparency and clarity.</p>
            </div>
            <div className='flex-1'>
                <div className="font-semibold text-xl px-4 py-2 text-[#356935] shadow-[0_6px_6px_2px_#00000040] flex items-center gap-4 my-8">
                    <img src={gmailIcon} alt="gmail" />
                    <p>Write to us</p>
                </div>
                <p>hello@venwave.com</p>
                <p>+91 93925 16148</p>
                <p className='text-[#356935] my-4 text-lg'>We are available on all days between 10 AM to 7PM</p>
            </div>
        </section>
    );
}   

export default LetsTalk;