import { ChevronDown } from "lucide-react"

export function NewsFooter() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <div className="flex items-center gap-1">
                        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center text-sm font-bold">L</div>
                        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center text-sm font-bold">G</div>
                        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center text-sm font-bold">O</div>
                    </div>
                </div>

                <div className="mb-6">
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <a href="#" className="hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            News
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Sport
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Business
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Innovation
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Culture
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Arts
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Travel
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Earth
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Audio
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Video
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Live
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Weather
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            NEWS Shop
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            BritBox
                        </a>
                    </nav>
                </div>

                <div className="mb-6">
                    <button className="flex items-center gap-2 bg-muted px-4 py-2 rounded text-sm hover:bg-muted/80 transition-colors">
                        NEWS in other languages
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium">Follow NEWS on:</span>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                X
                            </a>
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                f
                            </a>
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                IG
                            </a>
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                TT
                            </a>
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                in
                            </a>
                            <a
                                href="#"
                                className="w-6 h-6 bg-foreground text-background flex items-center justify-center text-xs font-bold hover:opacity-80 transition-opacity"
                            >
                                YT
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            About the NEWS
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Cookies
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Accessibility Help
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Contact the NEWS
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Advertise with us
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Do not share or sell my info
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            NEWS.com Help & FAQs
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Content Index
                        </a>
                    </nav>
                </div>

                <div className="text-xs text-muted-foreground">
                    <p>
                        Copyright 2025 NEWS. All rights reserved. The NEWS is not responsible for the content of external sites.{" "}
                        <a href="#" className="hover:text-primary transition-colors underline">
                            Read about our approach to external linking.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
