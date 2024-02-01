import { Menu } from 'lucide-react';
import profile from '../assets/profile.svg'
import { ModeToggle } from './mode-toggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <div className='flex items-center justify-between md:px-24 px-2 pt-3 pb-3 border-b-2 border-dotted '>
        <div className='px-5'>
          <img src={profile} alt="profile" />
        </div>
        <nav className='items-center gap-6 text-sm hidden md:flex'>
          <a href="#" className='transition-colors hover:text-foreground hover:font-medium text-foreground/60'>
            <Link to={"/"} ><span>01.</span> Home</Link>
          </a>
          <a href="#" className='transition-colors hover:text-foreground hover:font-medium text-foreground/60'>
            <Link to={"about"} ><span>02.</span> About</Link>
          </a>
          <a href="#" className='transition-colors hover:text-foreground hover:font-medium text-foreground/60'>
            <Link to={'projects'} ><span>03.</span> Projects</Link>
          </a>
          <a href="#" className='transition-colors hover:text-foreground hover:font-medium text-foreground/60'>
            <Link to={'experience'} ><span>04.</span> Experience</Link>
          </a>
          <a href="#" className='transition-colors hover:text-foreground hover:font-medium text-foreground/60'>
            <Link to={'contact'} ><span>05.</span> Contact</Link>
          </a>
        </nav>
        <div className='flex gap-4 items-center justify-center'>
          <ModeToggle></ModeToggle>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger><Menu /></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;