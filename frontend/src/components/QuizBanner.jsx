import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const QuizBanner = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-purple-100 to-white overflow-hidden w-full my-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 p-6 md:p-12 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Test Your Knowledge with AI-Powered Quizzes
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Challenge yourself and see how much you’ve learned. Our AI-powered quizzes adapt to your skill level to help you grow faster.
          </p>
          <Button className="bg-blue-900 text-white cursor-pointer hover:bg-blue-800 mt-4">
            Take the Quiz
          </Button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 p-6 md:p-12 flex justify-center">
          <img
            src="quizz.jpg"
            alt="AI Quiz Illustration"
            className="w-full max-w-sm object-contain"  />
        </div>
      </div>
    </section>

    <section className="mx-4 md:mx-8 pb-16 pt-12 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Start Learning Today
      </h2>
      <p className="text-gray-600 text-base md:text-lg max-w-5xl mb-6">
        Join thousands of learners and take your skills to the next level. Explore courses, challenge yourself with quizzes, and achieve your goals with LearnMate.
      </p>
      <button className="flex px-3 bg-blue-900 text-white font-medium cursor-pointer hover:bg-blue-800 py-2 rounded-md items-center gap-2 ">
        Get Started
        <ArrowRight size={20} />
      </button>
    </section>

    </>
  )
}

export default QuizBanner
