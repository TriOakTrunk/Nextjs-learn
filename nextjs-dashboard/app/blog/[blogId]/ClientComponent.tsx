 
'use client'
import { createBlog } from 'app/lib/actions'
 
export function ClientComponent() {
  return <button  className="text-[#2b95f8] underline hover:opacity-80 transition" onClick={() => createBlog()}>Create</button>
}