import { NewsHeader } from "@/components/news-header"
import { BreakingNews } from "@/components/breaking-news"
import { NewsGrid } from "@/components/news-grid"
import { NewsFooter } from "@/components/news-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <BreakingNews />
      <main>
        <NewsGrid />
      </main>
      <NewsFooter />
    </div>
  )
}
