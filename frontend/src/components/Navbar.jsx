import { Book, LayoutDashboard, LogOut, Menu, School, User } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'
import { FiBell } from 'react-icons/fi'

const Navbar = () => {
  const user = useSelector((state) => state.auth.user)
  const [hasNewAnnouncement, setHasNewAnnouncement] = useState(true)

  const handleBellClick = () => {
    setHasNewAnnouncement(false)
    // navigate to announcements page or open modal
  }

  return (
    <header className='bg-white/90 sticky top-0 left-0 right-0 z-20 backdrop-blur-md shadow-sm'>
      {/* DESKTOP */}
      <div className='hidden md:flex items-center justify-between py-4 px-6 max-w-6xl mx-auto'>
        {/* LOGO */}
        <div className='flex items-center gap-2'>
          <School className='text-blue-900 font-bold' size={30} />
          <h1 className='text-blue-900 font-bold text-3xl'> LearnMate</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-4'>
          {!user ? (
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 cursor-pointer transition">
              Create Account
            </button>
          ) : (
            <div className="flex items-center gap-2">

              {/* Student-only*/}
              {user?.role === "student" && (
                <div className='flex items-center gap-2'>
                  <button className="cursor-pointer text-blue-800 text-lg">
                    Teach on LearnMate
                  </button>
                  <span className='text-gray-200'>|</span>

                  <button className="cursor-pointer text-blue-800 text-lg">
                    Quiz
                  </button>
                   <span className='text-gray-200'>|</span>

                </div>
              )}

              {/* Student-only: Notification Bell */}
              {user?.role === "student" && (
                <div className="relative cursor-pointer" onClick={handleBellClick}>
                  <FiBell
                    size={22}
                    className={`transition-colors ${hasNewAnnouncement ? "text-blue-700" : "text-gray-600"}`} />
                  {hasNewAnnouncement && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white animate-pulse"></span>
                  )}
                </div>
              )}

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='bg-purple-200 text-purple-600 font-medium ml-3 text-xl w-8 h-8 items-center justify-center flex rounded-full'>
                    <AvatarImage
                      src={user?.avatar || "https://github.com/shadcn.png"}
                      className="w-8 h-8 rounded-full cursor-pointer" />
                    <AvatarFallback className='cursor-pointer'>
                      {user.name ? user.name[0].toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 p-2" align="start">
                  <DropdownMenuLabel className="text-base py-1 border-b border-purple-200" >My Account</DropdownMenuLabel>
                  <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem className="text-base">
                      <User size={20} />
                      Profile
                    </DropdownMenuItem>

                    {user?.role === "student" && (
                      <DropdownMenuItem className="text-base">
                        <Book />
                        My Enrollments
                      </DropdownMenuItem>
                    )}
                    {user?.role === "instructor" && (
                      <DropdownMenuItem className="text-base">
                        <LayoutDashboard />
                        Dashboard
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-base bg-red-50 text-red-600 hover:text-red-700 cursor-pointer focus:bg-red-100 focus:text-red-600">
                    <LogOut className='text-red-600' />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className='flex md:hidden items-center justify-between px-4 py-3 h-full'>
        <h1 className='text-blue-900 font-bold text-2xl'> LearnMate</h1>
        <Mobile user={user} />
      </div>
    </header>
  )
}

export default Navbar

const Mobile = ({ user }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' className='rounded-full bg-gray-100 hover:bg-gray-200' variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col px-2">
          <SheetHeader >
            <SheetTitle className='text-blue-900'>LearnMate</SheetTitle>
          </SheetHeader>
          <nav className='flex flex-col space-y-4 px-4'>
            <span>Profile</span>
            <span>Announcements</span>
            <span>Quiz</span>
            <span>
              {user?.role === "instructor" ? "My Courses" : "My Enrollments"}
            </span>
            {user?.role === "instructor" && (
              <span>Dashboard</span>
            )}
            <span>Logout</span>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}
