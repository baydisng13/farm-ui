import FUIFaqsWithDividedRows from "previewsComponents/FUIFaqsWithDividedRows";
import FUIFaqsWithSearchBox from "previewsComponents/FUIFaqsWithSearchBox";
import FUIForm from "previewsComponents/FUIForm";
import FUIHeroSectionWithLogoClouds from "previewsComponents/FUIHeroSectionWithLogoClouds";
import FUIHeroWithGrid from "previewsComponents/FUIHeroWithGrid";
import React from "react";

type ComponentProps = {
    [key: string]: {
        component: React.ReactNode,
        description: string
        path: string,
        codeCopy:{
            [key: string]: string
        }

    }
}
export const componentToPreview: ComponentProps = {

    "001": {
        component: <FUIForm />,
        description: "Form Input UI",
        path:"previewsComponents/FUIForm",
        codeCopy: {
            react: `
            \n"use client";\n\nimport {\n  CardTitle,\n  CardDescription,\n  CardHeader,\n  CardContent,\n  CardFooter,\n  Card,\n} from "@/components/ui/card";\nimport { Label } from "@/components/ui/label";\nimport { Input } from "@/components/ui/input";\nimport { Textarea } from "@/components/ui/textarea";\nimport LinkItem from "components/ui/LinkItem";\nimport { ChevronRight, Loader2 } from "lucide-react";\nimport { useState, useTransition } from "react";\nimport { useToast } from "@/components/ui/use-toast";\nimport { saySomething } from "actions/emailSubRelated";\nimport {Button} from "@/components/ui/button";\ntype FormType = {\n  firstName: string;\n  lastName?: string;\n  email: string;\n  message: string;\n};\nexport default function FUIForm() {\n  const [pending, startTransition] = useTransition();\n  const { toast } = useToast()\n\n  const [forms, setForms] = useState({\n    firstName: "",\n    lastName: "",\n    email: "",\n    message: "",\n  });\n  \n  const handleChange = (e: any) => {\n    setForms({ ...forms, [e.target.name]: e.target.value });\n  };\n  const onSubmit = (e:any) => {\n    e.preventDefault();\n    startTransition(async () => {\n      saySomething({\n        firstName: forms.firstName,\n        lastName: forms.lastName,\n        email: forms.email,\n        message: forms.message,\n      })\n        .then((res) => {\n          toast({\n            position: "bottom-left",\n            title: "Message submitted",\n            description:\n              "You have successfully submitted your message. we will keep in touch with you with the speed of light :)",\n          });\n          setForms({\n            firstName:"",\n            lastName:"",\n            email: "",\n            message: ""\n          })\n        })\n        .catch((err) => {\n          toast({\n            position: "bottom-left",\n\n            title: "Something went wrong",\n            description:\n              "There is an error while submitting the form, Please try again later :(",\n            variant: "destructive",\n\n          });\n        });\n    });\n  };\n  return (\n    <section className="custom-screen-lg mx-auto z-20">\n      <div className="relative backdrop-blur-3xl z-10 max-w-4xl mx-auto  space-y-4">\n        <Card className="relative mt-20 py-10 z-20 backdrop-blur-3xl">\n          <CardHeader>\n            <CardDescription>\n              Fill out the form below and we'll get back to you as soon as\n              possible.\n            </CardDescription>\n          </CardHeader>\n          <CardContent>\n            <div className=""></div>\n            <form className="space-y-4 z-20" onSubmit={onSubmit}>\n              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">\n                <div className="space-y-2">\n                  <Label htmlFor="first-name">First Name</Label>\n                  <Input\n\n                    value={forms.firstName}\n                    onChange={(e) => handleChange(e)}\n                    name="firstName"\n                    placeholder="Enter your first name"\n                    required\n                  />\n                </div>\n                <div className="space-y-2">\n                  <Label htmlFor="last-name">Last Name</Label>\n                  <Input\n                    value={forms.lastName}\n                    onChange={handleChange}\n                    name="lastName"\n                    placeholder="Enter your last name"\n                  />\n                </div>\n              </div>\n              <div className="space-y-2">\n                <Label htmlFor="email">Email</Label>\n                <Input\n\n                  value={forms.email}\n                  name="email"\n                  onChange={handleChange}\n                  placeholder="Enter your email"\n                  type="email"\n                  required\n                />\n              </div>\n              <div className="space-y-2">\n                <Label htmlFor="message">Message</Label>\n                <Textarea\n                  required\n                  value={forms.message}\n                  \n                   className="bg-transparent"\n                   onChange={handleChange}\n                  name="message"\n                  maxLength={200}\n                  \n                  placeholder="Enter your message"\n                />\n              </div>\n                <Button\n                  disabled={pending}\n                  variant="default"\n                  className="inline-flex rounded-3xl  text-center group items-center w-full justify-center bg-gradient-to-tr from-black/90 via-zinc-800 to-black  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-6 px-10"\n                >\n                  Submit\n                  {pending ? (\n                    <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />\n                  ) : (\n                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />\n                  )}\n                </Button>\n            </form>\n          </CardContent>\n        </Card>\n      </div>\n    </section>\n  );\n}\n

            
            `
 
        }
    },
    "bb87ffac-1579-4670-80be-7c1180404b4e": {
        component: <FUIFaqsWithSearchBox />,
        description: "FAQ with Search Box",
        path:"previewsComponents/FUIFaqsWithSearchBox",
        codeCopy: {
            react: `
            \nimport React from "react";\nimport * as Avatar from "@radix-ui/react-avatar";\nimport * as ContextMenu from "@radix-ui/react-context-menu";\nimport * as Dialog from "@radix-ui/react-dialog";\nimport * as Select from "@radix-ui/react-select";\nimport * as Tabs from "@radix-ui/react-tabs";\nimport * as DropdownMenu from "@radix-ui/react-dropdown-menu";\nimport { Separator } from "@/components/ui/separator";\nimport { Mail } from "lucide-react";\n\nexport default function FUIFaqsWithSearchBox() {\n  const faqsList = [\n    {\n      q: "What are some random questions to ask?",\n      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Do you include common questions?",\n      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Can I use this for 21 questions?",\n      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Are these questions for girls or for boys?",\n      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "What do you wish you had more talent doing?",\n      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",\n      href: "javascript:void(0)",\n    },\n  ];\n\n  return (\n    <section className="relative">\n      <img\n        className="absolute inset-x-0 -top-20 opacity-25 "\n        src={\n          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"\n        }\n        width={1000}\n        height={1000}\n        alt="back bg"\n      />\n\n      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>\n\n      <div className="pt-10 max-w-screen-xl mx-auto px-4 md:px-8">\n        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">\n          <h3 className="text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl">\n            How can we help?\n          </h3>\n          <p className="text-gray-100">\n            Everything you need to know about the product. Can"t find the answer\n            you’re looking for? feel free to{" "}\n            <a\n              className="text-cyan-700 font-semibold whitespace-nowrap"\n              href="javascript:void(0)"\n            >\n              contact us\n            </a>\n            .\n          </p>\n          <form\n            onSubmit={(e) => e.preventDefault()}\n            className="mx-auto sm:mx-auto "\n          >\n            <div className="relative">\n              <Mail className="w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto" />\n              <input\n                type="text"\n                placeholder="Enter your email"\n                className="w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"\n              />\n            </div>\n          </form>\n        </div>\n        <Separator className="h-[1px] bg-white/10 mt-4" />\n        <div className="mt-12">\n          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">\n            {faqsList.map((item, idx) => (\n              <li key={idx} className="space-y-3">\n                <summary className="flex items-center justify-between font-semibold text-gray-500">\n                  {item.q}\n                </summary>\n                <p\n                  dangerouslySetInnerHTML={{ __html: item.a }}\n                  className="text-gray-200 leading-relaxed"\n                ></p>\n                <a\n                  href={item.href}\n                  className="flex items-center gap-x-1 text-sm text-cyan-600 hover:text-cyan-400 duration-150 font-medium"\n                >\n                  Read more\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 20 20"\n                    fill="currentColor"\n                    className="w-5 h-5"\n                  >\n                    <path\n                      fillRule="evenodd"\n                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"\n                      clipRule="evenodd"\n                    />\n                  </svg>\n                </a>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </div>\n    </section>\n  );\n}\n\n


            
            `
        }

    },

    "100": {
        component: <FUIHeroWithGrid />,
        description: "Hero Section With Grid",
        path:"previewsComponents/FUIHeroWithGrid",
        codeCopy: {
            react: `
            \nimport React from "react";\nimport * as Avatar from "@radix-ui/react-avatar";\nimport * as ContextMenu from "@radix-ui/react-context-menu";\nimport * as Dialog from "@radix-ui/react-dialog";\nimport * as Select from "@radix-ui/react-select";\nimport * as Tabs from "@radix-ui/react-tabs";\nimport * as DropdownMenu from "@radix-ui/react-dropdown-menu";\nimport { Separator } from "@/components/ui/separator";\nimport { Mail } from "lucide-react";\n\nexport default function FUIFaqsWithSearchBox() {\n  const faqsList = [\n    {\n      q: "What are some random questions to ask?",\n      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Do you include common questions?",\n      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Can I use this for 21 questions?",\n      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Are these questions for girls or for boys?",\n      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "What do you wish you had more talent doing?",\n      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",\n      href: "javascript:void(0)",\n    },\n  ];\n\n  return (\n    <section className="relative">\n      <img\n        className="absolute inset-x-0 -top-20 opacity-25 "\n        src={\n          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"\n        }\n        width={1000}\n        height={1000}\n        alt="back bg"\n      />\n\n      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>\n\n      <div className="pt-10 max-w-screen-xl mx-auto px-4 md:px-8">\n        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">\n          <h3 className="text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl">\n            How can we help?\n          </h3>\n          <p className="text-gray-100">\n            Everything you need to know about the product. Can"t find the answer\n            you’re looking for? feel free to{" "}\n            <a\n              className="text-cyan-700 font-semibold whitespace-nowrap"\n              href="javascript:void(0)"\n            >\n              contact us\n            </a>\n            .\n          </p>\n          <form\n            onSubmit={(e) => e.preventDefault()}\n            className="mx-auto sm:mx-auto "\n          >\n            <div className="relative">\n              <Mail className="w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto" />\n              <input\n                type="text"\n                placeholder="Enter your email"\n                className="w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"\n              />\n            </div>\n          </form>\n        </div>\n        <Separator className="h-[1px] bg-white/10 mt-4" />\n        <div className="mt-12">\n          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">\n            {faqsList.map((item, idx) => (\n              <li key={idx} className="space-y-3">\n                <summary className="flex items-center justify-between font-semibold text-gray-500">\n                  {item.q}\n                </summary>\n                <p\n                  dangerouslySetInnerHTML={{ __html: item.a }}\n                  className="text-gray-200 leading-relaxed"\n                ></p>\n                <a\n                  href={item.href}\n                  className="flex items-center gap-x-1 text-sm text-cyan-600 hover:text-cyan-400 duration-150 font-medium"\n                >\n                  Read more\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 20 20"\n                    fill="currentColor"\n                    className="w-5 h-5"\n                  >\n                    <path\n                      fillRule="evenodd"\n                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"\n                      clipRule="evenodd"\n                    />\n                  </svg>\n                </a>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </div>\n    </section>\n  );\n}\n\n


            
            `
        }
    },
    "101": {
        component: <FUIHeroSectionWithLogoClouds  />,
        description: "Hero Section With Clouds and Logo",
        path:"previewsComponents/FUIHeroSectionWithLogoClouds",
        codeCopy: {
            react: `
            \nimport React from "react";\nimport * as Avatar from "@radix-ui/react-avatar";\nimport * as ContextMenu from "@radix-ui/react-context-menu";\nimport * as Dialog from "@radix-ui/react-dialog";\nimport * as Select from "@radix-ui/react-select";\nimport * as Tabs from "@radix-ui/react-tabs";\nimport * as DropdownMenu from "@radix-ui/react-dropdown-menu";\nimport { Separator } from "@/components/ui/separator";\nimport { Mail } from "lucide-react";\n\nexport default function FUIFaqsWithSearchBox() {\n  const faqsList = [\n    {\n      q: "What are some random questions to ask?",\n      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Do you include common questions?",\n      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Can I use this for 21 questions?",\n      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "Are these questions for girls or for boys?",\n      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",\n      href: "javascript:void(0)",\n    },\n    {\n      q: "What do you wish you had more talent doing?",\n      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",\n      href: "javascript:void(0)",\n    },\n  ];\n\n  return (\n    <section className="relative">\n      <img\n        className="absolute inset-x-0 -top-20 opacity-25 "\n        src={\n          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"\n        }\n        width={1000}\n        height={1000}\n        alt="back bg"\n      />\n\n      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>\n\n      <div className="pt-10 max-w-screen-xl mx-auto px-4 md:px-8">\n        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">\n          <h3 className="text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl">\n            How can we help?\n          </h3>\n          <p className="text-gray-100">\n            Everything you need to know about the product. Can"t find the answer\n            you’re looking for? feel free to{" "}\n            <a\n              className="text-cyan-700 font-semibold whitespace-nowrap"\n              href="javascript:void(0)"\n            >\n              contact us\n            </a>\n            .\n          </p>\n          <form\n            onSubmit={(e) => e.preventDefault()}\n            className="mx-auto sm:mx-auto "\n          >\n            <div className="relative">\n              <Mail className="w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto" />\n              <input\n                type="text"\n                placeholder="Enter your email"\n                className="w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"\n              />\n            </div>\n          </form>\n        </div>\n        <Separator className="h-[1px] bg-white/10 mt-4" />\n        <div className="mt-12">\n          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">\n            {faqsList.map((item, idx) => (\n              <li key={idx} className="space-y-3">\n                <summary className="flex items-center justify-between font-semibold text-gray-500">\n                  {item.q}\n                </summary>\n                <p\n                  dangerouslySetInnerHTML={{ __html: item.a }}\n                  className="text-gray-200 leading-relaxed"\n                ></p>\n                <a\n                  href={item.href}\n                  className="flex items-center gap-x-1 text-sm text-cyan-600 hover:text-cyan-400 duration-150 font-medium"\n                >\n                  Read more\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    viewBox="0 0 20 20"\n                    fill="currentColor"\n                    className="w-5 h-5"\n                  >\n                    <path\n                      fillRule="evenodd"\n                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"\n                      clipRule="evenodd"\n                    />\n                  </svg>\n                </a>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </div>\n    </section>\n  );\n}\n\n


            
            `
        }
    },
    "639934f5-ad80-4b22-aa0f-86cc9726a658": {
        component: <FUIFaqsWithDividedRows />,
        description: "FAQ with divided row",
        path:"previewsComponents/FUIFaqsWithDividedRows",
        codeCopy: {
            react: `
            \nimport React from "react";\nimport * as Avatar from "@radix-ui/react-avatar";\nimport * as ContextMenu from "@radix-ui/react-context-menu";\nimport * as Dialog from "@radix-ui/react-dialog";\nimport * as Select from "@radix-ui/react-select";\nimport * as Tabs from "@radix-ui/react-tabs";\nimport * as DropdownMenu from '@radix-ui/react-dropdown-menu';\nimport { Separator } from "@/components/ui/separator";\n\nexport default function FUIFaqsWithDividedRows() {\n\n    const faqsList = [\n        {\n            q: "What are some random questions to ask?",\n            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."\n        },\n        {\n            q: "Do you include common questions?",\n            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."\n        },\n        {\n            q: "Can I use this for 21 questions?",\n            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."\n        },\n        {\n            q: "Are these questions for girls or for boys?",\n            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."\n        },\n        {\n            q: "What do you wish you had more talent doing?",\n            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."\n        }\n    ]\n\n    return (\n        <section className='relative'>\n            <img\n        className="absolute inset-x-0 -top-20 opacity-20 "\n        src={"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"}\n        width={1000}\n        height={1000}\n        alt="back bg"\n      />\n    \n            <div className="py-14 relative  max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">\n                <div className='flex-1 '>\n                    <div className="max-w-lg">\n                        <h3 className='font-semibold text-cyan-600'>\n                            Frequently asked questions\n                        </h3>\n                        <p className='mt-3 text-gray-400 text-3xl font-extrabold sm:text-4xl'>\n                            All information you need to know\n                        </p>\n                    <Separator className="h-[1px] mt-5 bg-white/10"/>\n                    </div>\n                </div>\n                <div className='flex-1 mt-12 md:mt-0'>\n                    <ul className='space-y-4 divide-y'>\n                        {faqsList.map((item, idx) => (\n                            <li\n                                className="py-5"\n                                key={idx}>\n                                <summary\n                                    className="flex items-center justify-between font-semibold text-gray-700">\n                                    {item.q}\n                                </summary>\n                                <p\n                                    dangerouslySetInnerHTML={{ __html: item.a }}\n                                    className='mt-3 text-gray-300 leading-relaxed'>\n                                </p>\n                            </li>\n                        ))}\n                    </ul>\n                </div>\n            </div>\n        </section>\n    );\n};\n
            
            `
        }

    }
    

}