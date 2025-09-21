import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/redux/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [registerUser, {
    data: registerData,
    error: registerError,
    isLoading: registerIsLoading,
    isSuccess: registerIsSuccess
  }] = useRegisterUserMutation();

  const [loginUser, {
    data: loginData,
    error: loginError,
    isLoading: loginIsLoading,
    isSuccess: loginIsSuccess
  }] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target
    if (type === 'signup') {
      setSignupInput({ ...signupInput, [name]: value });
    }
    else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  const handleSubmit = async (type) => {
    const inputData = type === 'signup' ? signupInput : loginInput
    const action = type === 'signup' ? registerUser : loginUser
    await action(inputData)
  }

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Account created successfully")
    }
    if (registerError) {
      toast.error(registerError.data?.message || "Signup failed.")
    }
  }, [registerData, registerError, registerIsLoading])

  useEffect(() => {
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Welcome back to LearnMate")
      navigate('/')
    }
    if (loginError) {
      toast.error(loginError.data?.message || "Login failed.")
    }

  }, [loginData, loginError, loginIsLoading,])


  return (

    <div className="flex items-center justify-center h-screen p-4">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="signup"
          onValueChange={(tab) => {
            if (tab === "signup") setLoginInput({ email: "", password: "" });
            else setSignupInput({ name: "", email: "", password: "" });
          }}>
          <TabsList className='w-full bg-violet-50'>
            <TabsTrigger value="signup" className='text-xl w-1/2 cursor-pointer'>Sign Up</TabsTrigger>
            <TabsTrigger value="login" className='text-xl w-1/2 cursor-pointer'>Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup" className='border border-blue-200 rounded-xl shadow-md'>
            <Card>

              <CardHeader>
                <CardTitle className='text-center text-lg'>Create Your LearnMate Account</CardTitle>
                <CardDescription className='text-center'>
                  Join LearnMate to level up your skills
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input type='text'
                    id="name"
                    name='name'
                    value={signupInput.name}
                    placeholder="Enter your name"
                    required
                    className="focus-visible:ring focus-visible:ring-gray-400 focus-visible:border-gray-400 focus-visible:outline-none"
                    onChange={(e) => changeInputHandler(e, "signup")} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type='email'
                    id="email"
                    name='email'
                    value={signupInput.email}
                    placeholder="Enter your email id"
                    required
                    className="focus-visible:ring focus-visible:ring-gray-400 focus-visible:border-gray-400 focus-visible:outline-none"
                    onChange={(e) => changeInputHandler(e, "signup")} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="flex items-center justify-between w-full">
                    <Input type='password'
                      id="password"
                      name='password'
                      value={signupInput.password}
                      placeholder='Enter password'
                      required
                      className="focus-visible:ring focus-visible:ring-gray-400 focus-visible:border-gray-400 focus-visible:outline-none"
                      onChange={(e) => changeInputHandler(e, "signup")} />
                  </div>
                </div>
              </CardContent>

              <CardFooter className='w-full'>
                <Button
                  disabled={registerIsLoading}
                  onClick={() => handleSubmit("signup")}
                  className='w-full bg-blue-900 hover:bg-blue-950 cursor-pointer text-xl font-medium'>
                  {registerIsLoading ? (
                    <>
                      <Loader2 className="text-center w-5 h-5" /> Please wait
                    </>
                  ) :
                    "Sign up"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>


          <TabsContent value="login" className='border border-blue-200 rounded-xl shadow-md'>
            <Card>
              <CardHeader>
                <CardTitle className='text-center text-lg'>Login to your Account</CardTitle>
                <CardDescription className='text-center'>
                  Already have an account? Login Here
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type='email'
                    id="email"
                    name='email'
                    value={loginInput.email}
                    placeholder="Enter your email id"
                    required
                    className="focus-visible:ring focus-visible:ring-gray-400 focus-visible:border-gray-400 focus-visible:outline-none"
                    onChange={(e) => changeInputHandler(e, "login")} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input type='password'
                    id="password"
                    name="password"
                    value={loginInput.password}
                    placeholder='Enter password'
                    required
                    className="focus-visible:ring focus-visible:ring-gray-400 focus-visible:border-gray-400 focus-visible:outline-none"
                    onChange={(e) => changeInputHandler(e, "login")} />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  disabled={loginIsLoading}
                  onClick={() => handleSubmit("login")}
                  className='w-full bg-blue-900 hover:bg-blue-950 cursor-pointer text-xl font-medium'>
                  {loginIsLoading ? (
                    <>
                      <Loader2 className="text-center w-5 h-5" /> Please wait
                    </>
                  ) :
                    "Login"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div >
  )

}
export default Login;