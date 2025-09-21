import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const CourseCard = ({
    thumbnail = "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg",
    title = "Complete ReactJS Course: From Beginner to Advanced with Real World Projects",
    publisher = "Code Academy",
    rating = 4.5,
    reviews = 1200,
    price = "₹499",
    level = "Beginner",
}) => {
    return (
        <Card className="overflow-hidden px-0 pb-4 pt-0 rounded-lg bg-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative p-0 m-0 h-auto">
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-full block h-full object-cover rounded-t-lg"
                />
            </div>

            {/* Content */}
            <CardContent className="px-4 py-0 space-y-1 mt-0">
                <h3 className="font-semibold text-base line-clamp-1">{title}</h3>
                <p className="text-sm text-gray-500">{publisher}</p>

                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-base">{rating}</span>
                    <RatingStars rating={rating} />
                </div>

                <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-lg">{price}</span>
                    <span
                        className="px-2 py-1 text-sm bg-blue-600 text-white font-medium rounded-full" >
                        {level}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseCard


const RatingStars = ({ rating }) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            // full star
            stars.push(<IoIosStar key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />)
        } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
            // half star (use gradient or just a filled star with different color if no half-star icon)
            stars.push(<IoIosStarHalf  key={i} className="w-4 h-4 text-orange-400 fill-orange-400 opacity-70" />)
        } else {
            // empty star
            stars.push(<IoIosStarOutline  key={i} className="w-4 h-4 text-gray-300" />)
        }
    }
    return <div className="flex items-center">{stars}</div>
}