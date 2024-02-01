import { MenuIcon, XCircle } from 'lucide-react';
import profile from '../assets/profile.svg'
import { ModeToggle } from './mode-toggle';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';


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
            {/* <Drawer direction='right'>
              <DrawerTrigger><Button variant={'outline'}><MenuIcon /></Button></DrawerTrigger>
              <DrawerContent>
                <DrawerClose><XCircle /></DrawerClose>
                <div>
                  <nav>
                    <DrawerClose>
                      <a href="#">dfsd</a>
                    </DrawerClose>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer> */}
            <Sheet>
              <SheetTrigger><Button variant={'outline'}><MenuIcon /></Button></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <div className='flex flex-col gap-4 pt-8'>
                      <SheetClose asChild>
                        <Link to={"/"} >
                          <div className='p-4 hover:bg-accent rounded-md'><span>01.</span> Home </div>
                        </Link>

                      </SheetClose>
                      <SheetClose asChild>
                          <Link to={"about"} >
                            <div className='p-4 hover:bg-accent rounded-md'><span>02.</span> About</div>
                          </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to={"projects"} >
                          <div className='p-4 hover:bg-accent rounded-md'><span>03.</span> Projects</div>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to={"experience"} >
                          <div className='p-4 hover:bg-accent rounded-md'><span>04.</span> Experience</div>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to={"contact"} >
                          <div className='p-4 hover:bg-accent rounded-md'><span>05.</span> Contact</div>
                        </Link>
                      </SheetClose>
                    </div>
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