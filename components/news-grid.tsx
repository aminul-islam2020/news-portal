import { FeaturedStory } from "./featured-story"

const newsData = [
    {
        title: "Global Climate Summit Reaches Historic Agreement",
        summary:
            "World leaders unite on ambitious climate targets as scientists warn of critical tipping points approaching faster than expected.",
        category: "Environment",
        imageUrl: "/global-warming.jpg",
    },
    {
        title: "Tech Giants Face New Regulatory Challenges",
        summary:
            "Major technology companies prepare for sweeping new regulations as governments worldwide tighten oversight of digital markets.",
        category: "Technology",
        imageUrl: "/google.jpg",
    },
    {
        title: "Economic Markets Show Signs of Recovery",
        summary:
            "Financial analysts report positive indicators across major markets as inflation concerns begin to ease in key economies.",
        category: "Business",
        imageUrl: "/economic.jpg",
    },
    {
        title: "Breakthrough in Medical Research",
        summary:
            "Scientists announce significant progress in treating rare diseases using innovative gene therapy techniques.",
        category: "Health",
        imageUrl: "/medical-research.jpg",
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
    {
        title: "Space Mission Discovers New Exoplanets",
        summary:
            "NASA's latest deep space telescope reveals potentially habitable worlds in distant solar systems, revolutionizing our understanding of the universe.",
        category: "Science",
        imageUrl: "/space-telescope-exoplanets-discovery.jpg",
    },
    {
        title: "Artificial Intelligence Transforms Healthcare",
        summary:
            "Revolutionary AI diagnostic tools show 95% accuracy in early disease detection, promising to save millions of lives worldwide.",
        category: "Technology",
        imageUrl: "/ai-healthcare-diagnostic-technology.jpg",
    },
    {
        title: "Renewable Energy Reaches New Milestone",
        summary:
            "Solar and wind power now account for 40% of global electricity generation as costs continue to plummet dramatically.",
        category: "Environment",
        imageUrl: "/renewable-energy-solar-wind-power.jpg",
    },
    {
        title: "Olympic Records Shattered in Swimming",
        summary:
            "Three world records broken in a single day as swimmers push the boundaries of human performance at the championships.",
        category: "Sport",
        imageUrl: "/olympic-swimming-world-records.jpg",
    },
    {
        title: "Cryptocurrency Market Sees Major Shift",
        summary:
            "Digital currencies experience unprecedented volatility as central banks worldwide announce new regulatory frameworks.",
        category: "Business",
        imageUrl: "/cryptocurrency-market-digital-currency.jpg",
    },
    {
        title: "Ancient Archaeological Discovery",
        summary:
            "Archaeologists uncover 3,000-year-old civilization remains that could rewrite history books about early human societies.",
        category: "Culture",
        imageUrl: "/archaeological-discovery-ancient-civilization.jpg",
    },
    {
        title: "Mental Health Awareness Campaign Launches",
        summary:
            "Global initiative aims to reduce stigma and improve access to mental health services for underserved communities worldwide.",
        category: "Health",
        imageUrl: "/mental-health-awareness-campaign.jpg",
    },
    {
        title: "Quantum Computing Breakthrough Achieved",
        summary:
            "Scientists demonstrate quantum supremacy in solving complex problems that would take classical computers thousands of years.",
        category: "Science",
        imageUrl: "/quantum-computing-breakthrough-technology.jpg",
    },
    {
        title: "International Trade Agreement Signed",
        summary:
            "Historic multilateral trade deal promises to boost global commerce and create millions of jobs across participating nations.",
        category: "Business",
        imageUrl: "/international-trade-agreement-commerce.jpg",
    },
    {
        title: "Wildlife Conservation Success Story",
        summary:
            "Endangered species population doubles thanks to innovative conservation efforts and international cooperation programs.",
        category: "Environment",
        imageUrl: "/wildlife-conservation-endangered-species.jpg",
    },
    {
        title: "Film Festival Showcases Independent Cinema",
        summary:
            "Emerging filmmakers from 50 countries present groundbreaking works that challenge conventional storytelling boundaries.",
        category: "Culture",
        imageUrl: "/film-festival-independent-cinema.jpg",
    },
    {
        title: "Vaccine Development Shows Promise",
        summary:
            "Clinical trials for next-generation vaccines demonstrate exceptional efficacy against multiple disease variants.",
        category: "Health",
        imageUrl: "/vaccine-development-clinical-trials.jpg",
    },
]

export function NewsGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left sidebar - Sub news */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4 text-balance">Latest Updates</h2>
                    {newsData.slice(6, 12).map((story, index) => (
                        <div key={index} className="border-b border-border pb-4 last:border-b-0">
                            <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                                {story.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{story.summary}</p>
                            <span className="text-xs text-primary font-medium mt-2 inline-block">{story.category}</span>
                        </div>
                    ))}
                </div>

                {/* Center column - Main news */}
                <div className="lg:col-span-2">
                    <FeaturedStory {...newsData[0]} isLarge={true} />

                    {/* Secondary main stories */}
                    <div className="mt-8 space-y-6">
                        {newsData.slice(1, 6).map((story, index) => (
                            <FeaturedStory key={index} {...story} />
                        ))}
                    </div>
                </div>

                {/* Right sidebar - Sub news */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4 text-balance">Trending Now</h2>
                    {newsData.slice(12, 18).map((story, index) => (
                        <div key={index} className="border-b border-border pb-4 last:border-b-0">
                            <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                                {story.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{story.summary}</p>
                            <span className="text-xs text-primary font-medium mt-2 inline-block">{story.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
