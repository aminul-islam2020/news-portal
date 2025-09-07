import { Card, CardContent } from "@/components/ui/card"

export function MostPopularSection() {
    const popularStories = [
        {
            rank: 1,
            title: "Climate Summit Reaches Historic Agreement on Carbon Emissions",
            views: "2.3M",
            time: "6 hours ago",
        },
        {
            rank: 2,
            title: "Breakthrough Medical Treatment Shows Promise for Rare Disease",
            views: "1.8M",
            time: "4 hours ago",
        },
        {
            rank: 3,
            title: "Space Mission Discovers Water on Distant Exoplanet",
            views: "1.5M",
            time: "8 hours ago",
        },
        {
            rank: 4,
            title: "Economic Recovery Accelerates in Major Global Markets",
            views: "1.2M",
            time: "3 hours ago",
        },
        {
            rank: 5,
            title: "Revolutionary AI System Passes Advanced Reasoning Tests",
            views: "980K",
            time: "5 hours ago",
        },
    ]

    return (
        <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-primary">Most Popular</h2>
                <Card>
                    <CardContent className="p-0">
                        {popularStories.map((story, index) => (
                            <div
                                key={index}
                                className="flex items-center p-4 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer transition-colors"
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mr-4">
                                    {story.rank}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">{story.title}</h3>
                                    <div className="flex items-center text-xs text-muted-foreground space-x-2">
                                        <span>{story.views} views</span>
                                        <span>•</span>
                                        <span>{story.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
