import CourseCard from '@/components/CourseCard';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const courses = [1, 2, 3, 4, 5, 6]
const Courses = () => {
    const isLoading = false;
    return (
        <div className='bg-white'>
            <div className='max-w-5xl mx-auto my-6 p-6 md:px-10 lg:px-6'>
                <h2 className='font-semibold text-3xl text-center mb-2'>Your Next Skill Starts Here</h2>
                <p className="text-gray-500 text-base text-center md:text-lg">
                    Explore a wide range of expertly crafted courses designed to help you grow your skills and advance your career.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8 py-8'>
                    {isLoading ?
                        Array.from({ length: 6 }).map((_, idx) => (
                            <CourseSkeleton key={idx} />
                        ))
                        : courses.map((course, idx) => <CourseCard key={idx} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Courses

const CourseSkeleton = () => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden animate-pulse bg-white">
            {/* Thumbnail */}
            <Skeleton className="w-full h-44 bg-gray-200" />

            {/* Content */}
            <div className="px-4 py-3 space-y-2">
                {/* Title */}
                <Skeleton className="h-5 w-full bg-gray-200 rounded" />

                {/* Publisher */}
                <Skeleton className="h-4 w-1/2 bg-gray-200 rounded" />

                {/* Rating stars */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-10 bg-gray-200 rounded" /> {/* rating number */}
                    <Skeleton className="h-4 w-18 bg-gray-200 rounded" />
                </div>

                {/* Price & Level */}
                <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-5 w-16 bg-gray-200 rounded" />
                    <Skeleton className="h-5 w-20 bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    )
}