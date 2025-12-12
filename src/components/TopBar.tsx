import React from 'react'
import { Sparkles } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-40 px-4 md:px-10">
      <div className="mx-3 mt-2 p-3 card flex items-center justify-center bg-gradient-to-r from-pastel-pink to-pastel-blue">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">AETHER</span>
        </div>
      </div>
    </div>
  )
}