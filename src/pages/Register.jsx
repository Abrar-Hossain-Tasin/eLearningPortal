
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ onRegister }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function submit(e){
    e.preventDefault();
    const user = { name: name || email.split('@')[0] || 'Student' };
    onRegister && onRegister(user);
    navigate('/');
  }

  return (
    <div className='max-w-md mx-auto p-6 rounded-xl glass shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Create account</h2>
      <form onSubmit={submit} className='space-y-4'>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder='Full name' className='w-full px-4 py-2 border rounded-md' />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' className='w-full px-4 py-2 border rounded-md' />
        <div className='flex gap-2'>
          <button type='submit' className='px-4 py-2 bg-gradient-to-r from-red-500 to-green-400 text-white rounded-md'>Create</button>
          <button type='button' className='px-4 py-2 border rounded-md' onClick={()=>navigate('/login')}>Back to login</button>
        </div>
      </form>
    </div>
  );
}
