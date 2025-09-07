import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Sun, CloudRain } from "lucide-react"

export function WeatherWidget() {
    const weatherData = [
        { city: "London", temp: "18°C", condition: "Cloudy", icon: Cloud },
        { city: "New York", temp: "24°C", condition: "Sunny", icon: Sun },
        { city: "Tokyo", temp: "22°C", condition: "Rainy", icon: CloudRain },
        { city: "Sydney", temp: "26°C", condition: "Sunny", icon: Sun },
    ]

    return (
        <section className="py-8 border-t" >
            <div className="container mx-auto px-4" >
                <h2 className="text-2xl font-bold mb-6 text-primary" > Weather </h2>
                < div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
                    {
                        weatherData.map((weather, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer" >
                                <CardContent className="p-4" >
                                    <weather.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                                    <h3 className="font-semibold text-lg" > {weather.city} </h3>
                                    < p className="text-2xl font-bold text-primary" > {weather.temp} </p>
                                    < p className="text-sm text-muted-foreground" > {weather.condition} </p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
