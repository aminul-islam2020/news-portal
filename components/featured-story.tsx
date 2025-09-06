import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FeaturedStoryProps {
    title: string
    summary: string
    category: string
    imageUrl: string
    isLarge?: boolean
}

export function FeaturedStory({ title, summary, category, imageUrl, isLarge = false }: FeaturedStoryProps) {
    return (
        <Card className="group cursor-pointer overflow-hidden border-0 shadow-none hover:shadow-md transition-shadow">
            <div className={`relative ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {category}
                    </Badge>
                </div>
            </div>
            <div className="p-4">
                <h3
                    className={`font-bold text-balance leading-tight group-hover:text-primary transition-colors ${isLarge ? "text-2xl mb-3" : "text-lg mb-2"
                        }`}
                >
                    {title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{summary}</p>
                <div className="mt-3 text-sm text-muted-foreground">2 hours ago</div>
            </div>
        </Card>
    )
}
