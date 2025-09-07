import { Card, CardContent } from "@/components/ui/card"

export function SportsSection() {
    const sportsNews = [
        {
            title: "Premier League: Manchester City Defeats Arsenal 3-1",
            summary: "City extends their lead at the top of the table with a dominant performance at the Etihad Stadium.",
            time: "2 hours ago",
            image: "/placeholder-zp3wp.png",
        },
        {
            title: "Tennis: Djokovic Advances to Wimbledon Final",
            summary: "The Serbian star overcomes a tough semifinal challenge to reach his 8th Wimbledon final.",
            time: "4 hours ago",
            image: "/placeholder-gu68f.png",
        },
        {
            title: "Olympics: Swimming Records Broken in Paris",
            summary: "Three world records fall on day 5 of swimming competition at the Paris Olympics.",
            time: "6 hours ago",
            image: "/placeholder-hv4g2.png",
        },
    ]

    return (
        <section className="py-8 border-t">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-primary">Sport</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {sportsNews.map((story, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardContent className="p-0">
                                <img
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{story.title}</h3>
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
