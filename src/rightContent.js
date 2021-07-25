import './App.css';
import Dylan from './Assets/Dylan.jpg'
import SecondDylan from './Assets/Dylan-2.jpg'
import ThirdDylan from './Assets/Dylan-3.jpg'
import FourthDylan from './Assets/Dylan-4.jpg'
import FifthDylan from './Assets/Dylan-5.jpg'
import SixthDylan from './Assets/Dylan-6.jpg'


function RightContent() {
  return (
    <div className='picture-container'>
      <img className='dylan-picture' src={Dylan}/>
      <img className='dylan-picture' src={SecondDylan}/>
      <img className='dylan-picture' src={ThirdDylan}/>
      <img className='dylan-picture' src={FourthDylan}/>
      <img className='dylan-picture' src={FifthDylan}/>
      <img className='dylan-picture' src={SixthDylan}/>
    </div>
  );
}

export default RightContent;