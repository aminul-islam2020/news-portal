import { Badge } from "@/components/ui/badge"

export function BreakingNews() {
    return (
        <div className="bg-primary text-accent-foreground overflow-hidden">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="bg-accent-foreground text-accent border-accent-foreground flex-shrink-0">
                        <div className="flex items-center space-x-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-primary animate-pulse">LIVE</span>
                        </div>
                    </Badge>

                    <div className="overflow-hidden flex-1">
                        <div className="animate-scroll whitespace-nowrap">
                            <span className="text-sm font-medium inline-block pr-8">
                                Major diplomatic breakthrough announced as peace talks show promising results
                            </span>
                            <span className="text-sm font-medium inline-block pr-8">
                                Global climate summit reaches historic agreement on carbon emissions
                            </span>
                            <span className="text-sm font-medium inline-block pr-8">
                                Technology sector sees unprecedented growth in AI development
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
