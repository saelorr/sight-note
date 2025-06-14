import React, { useState } from 'react'
import '../output.css'

const SightReader = () => {

    const [answer, setAnswer] = useState('X')
    
    function checkAnswer (param: string) {
        setAnswer(param)
    }

    return (
        <div id='main' className='m-20 border-blue'>
            <div className='m-10 border-black'>
                <img alt='' className='h-25' src='/notes/treble_E.png'/>
            </div>
            <div id='answer' className='w-20 m-10 p-5 border-3 border-green-500 flex justify-center items-center'>{answer}</div>
            <div id='options' className='m-5 grid grid-cols-7 gap-2 w-sm'>
                <div id='note-c' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('C')}>C</div>
                <div id='note-d' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('D')}>D</div>
                <div id='note-e' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('E')}>E</div>
                <div id='note-f' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('F')}>F</div>
                <div id='note-g' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('G')}>G</div>
                <div id='note-a' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('A')}>A</div>
                <div id='note-b' className='p-5 border-3 border-blue-500 flex justify-center items-center' onClick={() =>checkAnswer('B')}>B</div>
            </div>
        </div>
    )
}

export default SightReader