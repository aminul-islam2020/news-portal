import { NewsHeader } from "@/components/news-header"
import { BreakingNews } from "@/components/breaking-news"
import { NewsGrid } from "@/components/news-grid"
import { SportsSection } from "@/components/sports-section"
import { BusinessSection } from "@/components/business-section"
import { TechnologySection } from "@/components/technology-section"
import { MostPopularSection } from "@/components/most-popular-section"
import { WeatherWidget } from "@/components/weather-widget"
import { NewsFooter } from "@/components/news-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <BreakingNews />
      <main>
        <NewsGrid />
        <SportsSection />
        <BusinessSection />
        <TechnologySection />
        <div className="grid lg:grid-cols-2 gap-8 py-8 container mx-auto px-4">
          <MostPopularSection />
          <WeatherWidget />
        </div>
      </main>
      <NewsFooter />
    </div>
  )
}
