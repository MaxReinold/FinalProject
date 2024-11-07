import { RiFacebookLine, RiTwitterXFill, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri'
import './footer.css'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { AiOutlineSend } from 'react-icons/ai'

export default function Footer() {
    return (
    <footer className="bg-foreground text-background bottom-0 w-full h-64 px-48">
        <div className="w-fit h-fit relative top-1/2 -translate-y-1/2">
            <table className="border-spacing-10">
                <tbody>
                    <tr>
                        <td className="text-xl font-bold">Project Name</td>
                        <td className='font-bold'>Follow Us</td>
                    </tr>
                    <tr>
                        <td>Contact Us</td>
                        <td>
                            <Button variant='ghost' className='p-2 w-6 h-6 rounded-full'><RiFacebookLine /></Button>
                            <Button variant='ghost' className='p-2 w-6 h-6 rounded-full'><RiTwitterXFill /></Button>
                            <Button variant='ghost' className='p-2 w-6 h-6 rounded-full'><RiInstagramLine /></Button>
                            <Button variant='ghost' className='p-2 w-6 h-6 rounded-full'><RiLinkedinLine /></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className='relative w-fit'><Input placeholder='Enter your email' title='email' type="text" className='bg-foreground text-background'/><AiOutlineSend className="absolute top-1/2 -translate-y-1/2 right-8 pointer-events-none"/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </footer>
)}