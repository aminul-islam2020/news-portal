import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function BusinessSection() {
    const businessNews = [
        {
            title: "Global Markets Rally as Inflation Concerns Ease",
            summary: "Stock markets worldwide surge following better-than-expected inflation data from major economies.",
            time: "1 hour ago",
            trend: "up",
        },
        {
            title: "Tech Giant Announces Major AI Investment",
            summary: "Company commits $50 billion to artificial intelligence research and development over next five years.",
            time: "3 hours ago",
            trend: "up",
        },
        {
            title: "Oil Prices Drop Amid Supply Concerns",
            summary: "Crude oil futures fall 3% as new supply agreements ease market tensions.",
            time: "5 hours ago",
            trend: "down",
        },
        {
            title: "Cryptocurrency Market Shows Mixed Signals",
            summary: "Bitcoin holds steady while altcoins experience volatility in today's trading session.",
            time: "7 hours ago",
            trend: "up",
        },
    ]

    return (
        <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-primary">Business</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {businessNews.map((story, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-sm line-clamp-3 flex-1">{story.title}</h3>
                                    {story.trend === "up" ? (
                                        <TrendingUp className="h-4 w-4 text-green-600 ml-2 flex-shrink-0" />
                                    ) : (
                                        <TrendingDown className="h-4 w-4 text-red-600 ml-2 flex-shrink-0" />
                                    )}
                                </div>
                                <p className="text-muted-foreground text-xs mb-2 line-clamp-2">{story.summary}</p>
                                <span className="text-xs text-muted-foreground">{story.time}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
