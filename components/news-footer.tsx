export function NewsFooter() {
    const footerSections = [
        {
            title: "News",
            links: ["Home", "UK", "World", "Business", "Politics", "Health", "Education", "Science", "Technology"],
        },
        {
            title: "Sport",
            links: ["Football", "Cricket", "Rugby", "Tennis", "Golf", "Formula 1", "Athletics", "Cycling"],
        },
        {
            title: "More",
            links: ["Weather", "Travel", "Culture", "Arts", "Food", "Future", "Earth", "Ideas"],
        },
        {
            title: "About",
            links: ["Contact Us", "Privacy Policy", "Terms of Service", "Accessibility", "Careers", "Press Office"],
        },
    ]

    return (
        <footer className="bg-muted text-muted-foreground mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm hover:text-primary transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center">
                    <p className="text-sm">© 2024 News Portal. All rights reserved. | Built with Next.js and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}
