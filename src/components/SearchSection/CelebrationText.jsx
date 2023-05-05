import React from 'react';
import '../SearchSection/SearchSection.css';


const textLink="Preserving the world's most outstanding places"
export default function CelebText() {
  return (
    <div>
    <p className='text'>Celebrate World Heritage Day: <a href="#" className='celeb-text'>{textLink}</a></p>
    </div>
  )
}
