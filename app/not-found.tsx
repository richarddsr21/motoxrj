"use client"

import Link from "next/link"
import { Zap, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
            <div className="relative bg-card border-2 border-primary rounded-2xl p-6 mt-6 shadow-2xl shadow-primary/20">
              <Zap className="w-16 h-16 text-primary animate-pulse" strokeWidth={2.5} />
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider cursor-context-menu">
            Erro 404
          </span>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          <span className="text-balance block">Página</span>
          <span className="text-primary text-balance block">não encontrada</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
          {"Parece que você pegou o caminho errado. A página que você está procurando não existe ou foi movida para outro endereço."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 group">
            <Link href="/" className="gap-2">
              <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary font-semibold px-8 group cursor-pointer">
            <button onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Página Anterior
            </button>
          </Button>
        </div>
        <div className="mt-12">
          <div className="inline-block px-6 py-3 rounded-lg border border-border/50 bg-card/30">
            <span className="text-6xl font-bold text-primary/30 tracking-wider cursor-context-menu">404</span>
          </div>
        </div>
      </div>
    </div>
  )
}
