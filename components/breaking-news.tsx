import { Badge } from "@/components/ui/badge"

export function BreakingNews() {
    return (
        <div className="bg-accent text-accent-foreground">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="bg-accent-foreground text-accent border-accent-foreground">
                        BREAKING
                    </Badge>
                    <p className="text-sm font-medium">
                        Major diplomatic breakthrough announced as peace talks show promising results
                    </p>
                </div>
            </div>
        </div>
    )
}
