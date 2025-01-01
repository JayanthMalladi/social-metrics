"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavBar } from "@/components/nav-bar"
import { AnalyticsChart } from "@/components/analytics-chart"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChartComponent } from "@/components/pie-chart"

export interface SocialData {
  post_id: string
  post_type: string
  likes: number
  comments: number
  shares: number
  views: number
  post_day: string
  post_time: string
  engagement_rate: number
  hashtags_used: string
  post_theme: string
  primary_age_group: string
}

export type FilterType = keyof SocialData

export default function Dashboard() {
  const [data, setData] = useState<SocialData[]>([])
  const [totalEngagement, setTotalEngagement] = useState(0)
  const [avgEngagementRate, setAvgEngagementRate] = useState(0)
  const [filterBy, setFilterBy] = useState<FilterType>('post_type')

  // Available filter options
  const filterOptions = [
    { value: 'post_type', label: 'Post Type' },
    { value: 'post_day', label: 'Day of Week' },
    { value: 'post_theme', label: 'Content Theme' },
    { value: 'primary_age_group', label: 'Age Group' }
  ]

  useEffect(() => {
    fetch('/social_media_simulated_data.csv')
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.split('\n').slice(1) // Skip header
        const parsedData = rows.map(row => {
          const [
            post_id, post_type, likes, comments, shares, views, 
            post_day, post_time, engagement_rate, hashtags_used, 
            post_theme, primary_age_group
          ] = row.split(',')
          
          return {
            post_id,
            post_type,
            likes: parseInt(likes),
            comments: parseInt(comments),
            shares: parseInt(shares),
            views: parseFloat(views),
            post_day,
            post_time,
            engagement_rate: parseFloat(engagement_rate),
            hashtags_used,
            post_theme,
            primary_age_group
          }
        })
        
        setData(parsedData)
        
        const totalEng = parsedData.reduce((sum, row) => 
          sum + row.likes + row.shares + row.comments, 0
        )
        const avgRate = parsedData.reduce((sum, row) => 
          sum + row.engagement_rate, 0
        ) / parsedData.length
        
        setTotalEngagement(totalEng)
        setAvgEngagementRate(avgRate)
      })
      .catch(error => {
        console.error('Error loading CSV:', error)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Hi User! 👋</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Analyze by:</span>
            <Select
              value={filterBy}
              onValueChange={(value) => setFilterBy(value as FilterType)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select filter" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalEngagement.toLocaleString()}</div>
              <p className="text-muted-foreground">Likes + Shares + Comments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avg. Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{(avgEngagementRate * 100).toFixed(2)}%</div>
              <p className="text-muted-foreground">Across all platforms</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Instagram</div>
              <p className="text-muted-foreground">Highest engagement rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement by {filterOptions.find(f => f.value === filterBy)?.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <AnalyticsChart data={data} filterBy={filterBy} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribution by {filterOptions.find(f => f.value === filterBy)?.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChartComponent data={data} filterBy={filterBy} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 