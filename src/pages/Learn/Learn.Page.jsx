import { useState, useEffect } from 'react'
import { GiSpeaker } from 'react-icons/gi';
import data from '../../data'

const LearnPage = () => {

    var utterance = new SpeechSynthesisUtterance();
    utterance.voice = speechSynthesis.getVoices().filter(voice => voice.name === 'Google हिन्दी')[0]

    const [currentWord, setCurrentWord] = useState();
    useEffect(() => {
        speechSynthesis.cancel()
        if (currentWord) {
            utterance.text = currentWord
            speechSynthesis.speak(utterance);
        }

    }, [currentWord])
    return (
        <div className="h-screen flex items-start px-4   md:px-10 lg:px-16 justify-between" >
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 rounded-lg p-8 border-cyan-400 border-2 border-solid" style={{ width: '72%' }} >
                {
                    Object.keys(data).map(key =>
                        <button onClick={() => {
                            setCurrentWord(key)
                        }} className={`p-4 rounded-xl text-4xl h-24 ${currentWord === key ? 'bg-c-red text-white' : 'bg-c-blue'}`}>{key}</button>
                    )
                }

            </div>
            <div className="rounded bg-white flex flex-col items-center p-3 min-h-2" style={{ width: '27%' }}>
                {
                    currentWord &&
                    <>
                        <h2 className='flex items-center text-5xl'>
                            <div className='mr-3'>
                                <span className='text-c-red'>{currentWord}</span> for <span className='text-c-red'>{data[currentWord].word} </span>
                            </div>
                            <button onClick={() => {
                                utterance.text = `${currentWord} for ${data[currentWord].word}`;
                                speechSynthesis.speak(utterance);
                            }} className='inline bg-c-black text-c-red rounded-full p-2 text-2xl'><GiSpeaker /></button>
                        </h2>
                        <img className='w-9/12 mb-8' src={data[currentWord].image} alt="" />
                        <p>Sentense : <span className='text-c-red'>{data[currentWord].sentense} <button className=' text-xl relative top-1' onClick={() => {
                            utterance.text = data[currentWord].sentense;
                            speechSynthesis.speak(utterance);
                        }}><GiSpeaker /></button></span></p>
                    </>
                }
            </div>


        </div>
    );
}

export default LearnPage;