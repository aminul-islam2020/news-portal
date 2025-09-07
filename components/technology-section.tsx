import { Card, CardContent } from "@/components/ui/card"

export function TechnologySection() {
    const techNews = [
        {
            title: "Revolutionary Quantum Computer Achieves New Milestone",
            summary: "Scientists demonstrate quantum supremacy in solving complex optimization problems.",
            time: "30 minutes ago",
            category: "Innovation",
            image: "/quantum-computer-laboratory.png",
        },
        {
            title: "Social Media Platform Introduces Enhanced Privacy Features",
            summary: "New end-to-end encryption and data control options give users more privacy protection.",
            time: "2 hours ago",
            category: "Privacy",
            image: "/smartphone-privacy-security.jpg",
        },
        {
            title: "Electric Vehicle Sales Surge 40% This Quarter",
            summary: "Growing infrastructure and falling battery costs drive unprecedented EV adoption rates.",
            time: "4 hours ago",
            category: "Automotive",
            image: "/electric-car-charging-station.png",
        },
    ]

    return (
        <section className="py-8 border-t">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-primary">Technology</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    {techNews.map((story, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-0">
                                <img
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.title}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                        {story.category}
                                    </span>
                                    <h3 className="font-semibold text-lg mt-2 mb-2 line-clamp-2">{story.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{story.summary}</p>
                                    <span className="text-xs text-muted-foreground">{story.time}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
