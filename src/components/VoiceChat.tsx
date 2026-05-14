'use client';
import { useState } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';

export default function VoiceChat() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Voice not supported");
      return;
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.onresult = (e: any) => setTranscript(e.results[0][0].transcript);
    if (isListening) recognition.stop();
    else recognition.start();
    setIsListening(!isListening);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-zinc-900 rounded-3xl p-12 text-center">
        <h1 className="text-5xl font-bold mb-12">Voice Mode</h1>
        <button onClick={toggleListening} className={`w-40 h-40 rounded-full flex items-center justify-center text-6xl ${isListening ? 'bg-red-600' : 'bg-blue-600'}`}>
          {isListening ? <MicOff /> : <Mic />}
        </button>
        {transcript && <p className="mt-8">You: {transcript}</p>}
      </div>
    </div>
  );
}
