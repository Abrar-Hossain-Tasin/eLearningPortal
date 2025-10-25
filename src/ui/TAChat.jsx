
import React, { useState } from 'react';

export default function TAChat({ courseTitle }){
  const [messages, setMessages] = useState([{from:'bot', text:`Hi! I'm the TA for ${courseTitle || 'this course'}.`}]);
  const [txt, setTxt] = useState('');

  function send(){
    if(!txt.trim()) return;
    setMessages(m=>[...m,{from:'user', text:txt}]);
    // simple canned response
    const lower = txt.toLowerCase();
    let reply = "I don't know that yet. Try asking about the outline or exams.";
    if(lower.includes('outline')) reply = `This course covers: ${courseTitle || 'topics...'}.`;
    else if(lower.includes('exam')) reply = 'Exam duration is 60 minutes.';
    setTimeout(()=> setMessages(m=>[...m,{from:'bot', text:reply}]), 600);
    setTxt('');
  }

  return (
    <div className='border rounded-md overflow-hidden'>
      <div className='p-3 h-40 overflow-y-auto bg-slate-50 space-y-2'>
        {messages.map((m,i)=>(
          <div key={i} className={`${m.from==='bot' ? 'bg-white text-slate-700' : 'bg-gradient-to-r from-red-500 to-green-400 text-white self-end'} p-2 rounded`}>{m.text}</div>
        ))}
      </div>
      <div className='p-3 bg-white flex gap-2'>
        <input value={txt} onChange={e=>setTxt(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} className='flex-1 border rounded-md px-3 py-2' placeholder='Ask the TA...' />
        <button onClick={send} className='px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-green-400 text-white'>Send</button>
      </div>
    </div>
  );
}
