"use client"

import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const categories = [
        "Home",
        "News",
        "Sport",
        "Business",
        "Innovation",
        "Culture",
        "Arts",
        "Travel",
        "Earth",
        "Audio",
        "Video",
        "Live",
        "Weather",
        "Newsletters",
    ]

    const categoriesWithDropdown = [
        "News",
        "Business",
        "Innovation",
        "Culture",
        "Arts",
        "Travel",
        "Earth",
        "Audio",
        "Live",
    ]

    const mainNavCategories = [
        "Home",
        "News",
        "Sport",
        "Business",
        "Innovation",
        "Culture",
        "Arts",
        "Travel",
        "Earth",
        "Audio",
        "Video",
        "Live",
    ]

    return (
        <>
            <header className="sticky top-0 z-50 bg-background border-b border-border">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Left - Hamburger Menu */}
                        <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-secondary">
                            <Menu className="h-5 w-5" />
                        </Button>

                        {/* Center - BBC Style Logo */}
                        <div className="flex items-center space-x-1">
                            <div className="bg-primary text-white px-3 py-2 text-lg font-bold">L</div>
                            <div className="bg-primary text-white px-3 py-2 text-lg font-bold">O</div>
                            <div className="bg-primary text-white px-3 py-2 text-lg font-bold">G</div>
                            <div className="bg-primary text-white px-3 py-2 text-lg font-bold">O</div>
                        </div>

                        {/* Right - Register and Sign In */}
                        <div className="flex items-center space-x-2">
                            <Button variant="default" size="sm" className="bg-primary text-white hover:bg-gray-800">
                                Register
                            </Button>
                            <Button variant="outline" size="sm" className="border-black text-black hover:bg-gray-100 bg-transparent">
                                Sign In
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border bg-background">
                    <div className="container mx-auto px-4">
                        <nav className="flex items-center justify-center space-x-8 py-2 overflow-x-auto">
                            {mainNavCategories.map((category) => (
                                <a
                                    key={category}
                                    href="#"
                                    className="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap py-2 transition-colors"
                                >
                                    {category}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-primary bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-background border-r border-border z-50 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-4">
                    {/* Close button */}
                    <div className="flex justify-end mb-4">
                        <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(false)} className="p-2">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Search bar */}
                    <div className="relative mb-6">
                        <Input placeholder="Search news, topics and more" className="pr-12 h-12 text-base" />
                        <Button
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-primary hover:bg-gray-800"
                        >
                            <Menu className="h-4 w-4 text-white" />
                        </Button>
                    </div>

                    {/* Navigation items */}
                    <nav className="space-y-1">
                        {categories.map((category) => (
                            <div key={category} className="group">
                                <a
                                    href="#"
                                    className="flex items-center justify-between w-full px-3 py-3 text-left text-base font-medium text-foreground hover:bg-secondary rounded-none border-b border-border last:border-b-0 transition-colors"
                                >
                                    <span>{category}</span>
                                    {categoriesWithDropdown.includes(category) && (
                                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </a>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}
