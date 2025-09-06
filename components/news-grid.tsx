import { FeaturedStory } from "./featured-story"

const newsData = [
    {
        title: "Global Climate Summit Reaches Historic Agreement",
        summary:
            "World leaders unite on ambitious climate targets as scientists warn of critical tipping points approaching faster than expected.",
        category: "Environment",
        imageUrl: "/climate-summit-leaders.png",
    },
    {
        title: "Tech Giants Face New Regulatory Challenges",
        summary:
            "Major technology companies prepare for sweeping new regulations as governments worldwide tighten oversight of digital markets.",
        category: "Technology",
        imageUrl: "/technology-regulation-digital-markets.jpg",
    },
    {
        title: "Economic Markets Show Signs of Recovery",
        summary:
            "Financial analysts report positive indicators across major markets as inflation concerns begin to ease in key economies.",
        category: "Business",
        imageUrl: "/financial-markets-recovery-economic-growth.jpg",
    },
    {
        title: "Breakthrough in Medical Research",
        summary:
            "Scientists announce significant progress in treating rare diseases using innovative gene therapy techniques.",
        category: "Health",
        imageUrl: "/medical-research-laboratory-gene-therapy.jpg",
    },
    {
        title: "International Sports Championship Begins",
        summary:
            "Athletes from around the world gather for the most anticipated sporting event of the year with record-breaking attendance.",
        category: "Sport",
        imageUrl: "/international-sports-championship-athletes.jpg",
    },
    {
        title: "Cultural Festival Celebrates Diversity",
        summary:
            "Communities come together to showcase rich cultural traditions in a vibrant celebration of global heritage and arts.",
        category: "Culture",
        imageUrl: "/cultural-festival-diversity-celebration-arts.jpg",
    },
]

export function NewsGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main featured story */}
                <div className="lg:col-span-2">
                    <FeaturedStory {...newsData[0]} isLarge={true} />
                </div>

                {/* Side stories */}
                <div className="space-y-6">
                    {newsData.slice(1, 3).map((story, index) => (
                        <FeaturedStory key={index} {...story} />
                    ))}
                </div>
            </div>

            {/* Secondary stories grid */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-balance">More Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.slice(3).map((story, index) => (
                        <FeaturedStory key={index} {...story} />
                    ))}
                </div>
            </div>
        </div>
    )
}
