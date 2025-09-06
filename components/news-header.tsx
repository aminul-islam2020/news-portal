import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsHeader() {
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
        "Video",
        "Live",
    ]

    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            {/* Top bar */}
            <div className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">Watch Live</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            Register
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">N</div>
                            <div className="bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">E</div>
                            <div className="bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">W</div>
                            <div className="bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">S</div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex items-center space-x-2 max-w-md flex-1 mx-8">
                        <div className="relative flex-1">
                            <Input placeholder="Search news..." className="pr-10" />
                            <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-secondary border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-8 overflow-x-auto py-3">
                        {categories.map((category) => (
                            <a
                                key={category}
                                href="#"
                                className="text-secondary-foreground hover:text-primary font-medium whitespace-nowrap transition-colors"
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}
