import venwaveLogo from '../../assets/secondary-logo.svg';
import locationIcon from '../../assets/location.svg';
import linkedinIcon from '../../assets/linkedIn.svg';
import twitterIcon from '../../assets/twitter.svg';
import youtubeIcon from '../../assets/youtube.svg';

function Footer() {
    return (
        <footer className='bg-black p-8 flex justify-around'>
            <div className='flex flex-col gap-12'>
                <img src={venwaveLogo} alt="venwave logo" className='w-[70%]'/>
                <div className='flex gap-4'>
                    <img src={locationIcon} alt="location" />
                    <p className='text-white text-xl'>Hyderabad</p>
                </div>
                <div className='flex gap-8'>
                    <a href=""><img src={linkedinIcon} alt="linkedIn" /></a>
                    <a href=""><img src={twitterIcon} alt="twitter" /></a>
                    <a href=""><img src={youtubeIcon} alt="youtube" /></a>
                </div>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-[#53B053] font-semibold text-lg'>ABOUT US</h3>
                <a href="">About us</a>
                <a href="">Contact us</a>
                <a href="">Careers</a>
                <a href="">SMEs</a>
                <a href="">Consultancy</a>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h3 className='text-[#53B053] font-semibold text-lg'>LATEST BLOGS</h3>
                <a href="">SMEs & consultancy</a>
                <a href="">What Happens After you connect with us?</a>
                <a href="">How To Build An profile?</a>
            </div>
        </footer>
    );
}

export default Footer;