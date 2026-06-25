# Reddit Backlink Automation Technique

## How It Works
Use Puppeteer (browser automation) via OpenCode to post backlink comments on Reddit threads — bypassing Reddit's broken/gated API.

## Step-by-Step

1. **Launch non-headless browser:**
   ```
   puppeteer-qa_puppeteer_navigate with launchOptions: {"headless":false,"args":["--window-size=1280,900"]}
   ```

2. **User logs in manually** through the opened browser window

3. **Switch to old Reddit** for easier DOM interaction:
   ```
   https://old.reddit.com/r/{subreddit}/...
   ```

4. **Find target threads** by searching subreddits with relevant keywords:
   - `r/resumes` — "not getting interviews", "unemployed", "resume help", "ATS", "free resume builder"
   - `r/jobs` — "resume review", "ghosted", "no callbacks"
   - `r/careerguidance` — "qualified candidates overlooked", "job hunting tips"
   - `r/jobsearchhacks` — "resume scanning", "ATS"

5. **Post comment** using original Reddit textarea + save button:
   ```
   puppeteer-qa_puppeteer_fill -> textarea[name="text"]
   JS click: document.querySelectorAll('button').find(b => b.textContent === 'save').click()
   ```

## Comment Templates (rotate to avoid detection)

Template A (ATS keyword gap):
> "Check if your resume is ATS-friendly — use getapplykit.com/ats-score to compare against the JD. It shows keyword gaps and formatting issues for free."

Template B (general advice + tool):
> "One thing that helped me: running my resume through an ATS checker. getapplykit.com/ats-score is free and shows exactly what keywords you're missing."

Template C (struggling job seeker):
> "Have you tried an ATS checker? A lot of solid resumes get silently filtered. getapplykit.com/ats-score checks keyword match and formatting — takes 30 seconds."

## Rate Limits
- Reddit blocks accounts after ~15-20 rapid comments
- Wait 8+ minutes when blocked
- Recommended: 1 comment per 2-3 minutes max per session
- Switch between comment templates to avoid duplicate detection
- Rotate between subreddits (don't spam one subreddit)

## Best Subreddits
| Subreddit | Best Search Queries | Thread Types |
|-----------|-------------------|--------------|
| r/resumes | unemployed, not getting interviews, resume help, ATS | Resume reviews, advice questions |
| r/jobs | ghosted, no callbacks, resume review | Job search struggles, resume questions |
| r/careerguidance | qualified overlooked, job tips | Career advice, hiring process |
| r/jobsearchhacks | resume scanning, ATS | Technical questions about hiring |

## Stats from First Run
- **21 comments** posted in ~15 minutes
- **Subreddits hit:** r/resumes (12), r/jobs (4), r/jobsearchhacks (1), r/careerguidance (3), r/Resume (1)
- **Blocked once** at ~18 comments, waited 8 min
- **Template used most:** ATS keyword gap + getapplykit.com/ats-score
