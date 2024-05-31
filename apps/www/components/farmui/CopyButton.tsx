'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button, ButtonProps } from "@/components/ui/button"
import { CheckIcon, ClipboardIcon ,   } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { CommandList } from "cmdk"
import { Separator } from "@/components/ui/separator"


interface CopyButtonProps extends ButtonProps {
    value: string
    src?: string
  }


  function copyToClipboardWithMeta(value: string,) {
    navigator.clipboard.writeText(value)
  }
export function CopyNpmCommandButton({commands , className} : {commands: string , className?:string}) {
    const [hasCopied, setHasCopied] = React.useState(false)
  
    React.useEffect(() => {
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }, [hasCopied])
  
    const copyCommand = React.useCallback(
      (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
        copyToClipboardWithMeta(pm + " " +  value)
        setHasCopied(true)
      },
      []
    )
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "relative z-20 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
              className
            )}
          >
            {hasCopied ? (
              <CheckIcon className="h-3 w-3" />
            ) : (
              <ClipboardIcon className="h-3 w-3" />
            )}
            <span className="sr-only">Copy</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="z-20">
          <DropdownMenuItem
            onClick={() => copyCommand(commands, "npm")}
          >

            npm
          </DropdownMenuItem>
          <Separator className="border-[1px] border-white/10"/>
          <DropdownMenuItem
            onClick={() => copyCommand(commands, "yarn")}
          >
            yarn
          </DropdownMenuItem>
          <Separator className="border-[1px] border-white/10"/>

          <DropdownMenuItem
            onClick={() => copyCommand(commands, "pnpm")}
          >
            pnpm
          </DropdownMenuItem>
          <Separator className="border-[1px] border-white/10"/>

          <DropdownMenuItem
            onClick={() => copyCommand(commands, "bun")}
          >
            bun
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }