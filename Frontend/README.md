# Social Media Analytics Platform - Frontend

A Next.js-based analytics dashboard for comparing and visualizing social media engagement patterns across 4chan and Reddit, with AI-powered insights using CopilotKit.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.7 with React 19.2.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Data Visualization:** ApexCharts 5.3.6, React Simple Maps 3.0.0
- **State Management:** TanStack React Query 5.90.12
- **AI Integration:** CopilotKit 1.10.6, OpenAI 6.10.0
- **HTTP Client:** Axios 1.13.2
- **UI Components:** React Icons, React Animated Numbers, React Spinners

## 📦 Installation

```bash
pnpm install
```

## 🔧 Configuration

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## ▶️ Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

To run on a different port:

```bash
pnpm dev --port 8080
```

## 📄 Available Pages

### 4chan Dashboard (`/chan`)
- Board statistics and summary metrics
- Daily/hourly activity trends
- Engagement metrics by post type
- Country-based post statistics
- Interactive filters and date ranges

### Reddit Dashboard (`/reddit`)
- Subreddit analytics and statistics
- Daily post counts by subreddit
- Top subscribers rankings
- Engagement trends and metrics

### Platform Comparison (`/comparison`)
- Side-by-side 4chan vs Reddit analysis
- Engagement pattern comparison
- Toxicity metrics across platforms
- Event-related discussion timelines

## 📁 Project Structure

```
src/app/
├── api/                    # API client functions
│   ├── chanApi.js
│   ├── redditApi.js
│   ├── comparisonApi.js
│   └── copilotkit/
├── components/             # Reusable components
│   ├── Chart/             # Chart components
│   ├── Copilot/           # AI assistant
│   ├── CountriesCard/     # Geographic visualization
│   └── Filter/            # Filter components
├── hooks/                 # Custom React hooks
│   ├── useChanDashboard.js
│   ├── useRedditDashboard.js
│   └── useComparisonDashboard.js
├── chan/                  # 4chan dashboard
├── reddit/                # Reddit dashboard
└── comparison/            # Comparison dashboard
```

## 🎨 Key Features

- **Interactive Charts:** Line, bar, and grouped bar charts with ApexCharts
- **Geographic Maps:** World map visualization with React Simple Maps
- **Real-time Data:** Automatic data fetching and caching with React Query
- **AI Assistant:** Natural language queries with CopilotKit integration
- **Responsive Design:** Mobile-first design with Tailwind CSS
- **Animated Statistics:** Smooth number animations for statistics

## 🛠️ Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [ApexCharts Documentation](https://apexcharts.com/docs/react-charts/)
- [CopilotKit Documentation](https://docs.copilotkit.ai/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📊 Sample Outputs & Visualizations

The platform provides rich visualizations and analytics. Sample outputs are available in the `outputs/` directory:

### 4chan Analytics
- **Board Statistics:** Summary stats including total posts, unique boards, and toxicity scores
  ![4chan Stats](outputs/Chan_stats.png)

- **Daily Posts by Boards:** Time-series visualization of daily posting activity across boards
  ![Daily Posts](outputs/Daily%20Posts%20Chan%20By%20boards%20and%20date.png)

- **Posts by Country:** Geographic distribution of 4chan posts

  ![Posts by Country](outputs/Posts%20by%20Country%20Chan.png)

### Reddit Analytics
- **Subreddit Statistics:** Overview of Reddit activity including posts, subreddits, and engagement
  ![Reddit Stats](outputs/reddit_stats.png)

- **Daily Posts by Subreddits:** Trending analysis of subreddit posting activity
  ![Daily Posts by Subreddit](outputs/Daily%20Posts%20By%20Subreddits.png)

- **Top Subscribers:** Most popular subreddits by subscriber count
  ![Top Subscribers](outputs/Top%20Subscribers%20by%20Subreddits.png)

### Platform Comparison
- **Engagement by Post Type:** Compare how different post types perform across platforms
  ![Engagement by Type](outputs/Engagement%20by%20Post%20Type.png)

- **Average Toxicity Comparison:** Toxicity levels across boards and subreddits
  ![Toxicity Comparison](outputs/Average%20Toxicity%20Per%20Boards_Subreddit.png)

- **Event-Related Timeline:** Track discussion trends around specific events (e.g., Cloudflare Outage)
  ![Event Timeline](outputs/Cloudflare%20Outage%20Discussion%20Trends%20(2025-11-18).png)


## 🚀 Deployment

Deploy to Vercel, Netlify, or any Node.js hosting platform. Ensure environment variables are configured in your deployment settings.
