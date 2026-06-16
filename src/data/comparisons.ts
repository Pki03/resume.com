export interface Comparison {
  slug: string
  competitor: string
  competitorUrl: string
  headline: string
  description: string
  summary: string
  prosCons: { ours: string[]; theirs: string[] }
  features: { name: string; us: string; them: string }[]
  cta: string
}

export const comparisons: Comparison[] = [
  {
    slug: "novoresume-alternative",
    competitor: "Novoresume",
    competitorUrl: "https://novoresume.com",
    headline: "Novoresume vs ResumeBuilder: Why Free Beats $24/Month",
    description: "See how our free resume builder compares to Novoresume's premium offering. Get professional templates, ATS optimization, and PDF export — completely free, no credit card needed.",
    summary: "While Novoresume offers polished templates and a good user experience, their free tier is extremely limited — you can only create one resume, miss most templates, and can't export as PDF without paying $24/month. Our builder gives you unlimited free resumes, all 8 templates, ATS scoring, AI suggestions, and PDF export — all without a single payment.",
    prosCons: {
      ours: ["100% free — unlimited resumes, all templates, PDF export", "Real-time ATS score with keyword gap analysis", "AI-powered bullet point improvement and summary generation", "No account sign-up required — start instantly", "Free cover letter generator included"],
      theirs: ["Slightly more template design options at premium tier", "Well-established brand with larger template library", "European-style minimalist design aesthetic", "LinkedIn profile import feature"]
    },
    features: [
      { name: "Price", us: "Free (no payment needed)", them: "$24/month or $96/year" },
      { name: "Free PDF Export", us: "Yes, unlimited", them: "No — requires premium ($24/mo)" },
      { name: "ATS Score Checker", us: "Built-in real-time scoring + standalone tool", them: "Not available" },
      { name: "Templates", us: "8 pro templates + 7 color themes each", them: "Limited on free; 40+ on premium" },
      { name: "AI Writing Assistant", us: "Free — bullet point and summary generator", them: "Included in premium" },
      { name: "Cover Letter Generator", us: "Free, included", them: "Separate product (additional cost)" },
      { name: "Account Required", us: "No — works entirely in browser", them: "Yes — email sign-up required" },
      { name: "Resume Examples", us: "40+ role-specific examples with ATS tips", them: "Limited selection" }
    ],
    cta: "Start building your free resume now — no sign-up, no credit card, no limits."
  },
  {
    slug: "flowcv-alternative",
    competitor: "FlowCV",
    competitorUrl: "https://flowcv.io",
    headline: "FlowCV vs ResumeBuilder: Better ATS Tools, No Premium Paywall",
    description: "Compare FlowCV and our free resume builder. Get advanced ATS analysis, more templates, and unlimited exports — without FlowCV's premium subscription.",
    summary: "FlowCV offers a clean interface and decent templates, but their best features (ATS analysis, PDF export without watermark, custom sections) are locked behind a $12/month premium plan. Our ATS checker is more advanced with keyword stemming, synonym matching, and STAR format detection — and it's completely free.",
    prosCons: {
      ours: ["Advanced ATS scoring with keyword stemming and synonym matching", "Real-time STAR format and quantified achievement detection", "No watermark on exported PDFs", "More role-specific resume examples (40+)", "Free bullet point improver and summary generator"],
      theirs: ["Built-in grammar checking", "Multiple file format exports (PDF, DOCX, TXT)", "URL-based sharing of resumes", "Clean, minimal interface"]
    },
    features: [
      { name: "ATS Score", us: "Advanced — 5 dimensions with keyword, STAR, fluff analysis", them: "Basic keyword matching (premium: $12/mo)" },
      { name: "PDF Export", us: "Free, no watermark, unlimited", them: "Free with watermark; clean on premium" },
      { name: "Templates", us: "8 pro templates, 7 color themes", them: "6 templates on free; 12 on premium" },
      { name: "AI Features", us: "Bullet point improver, summary generator, ATS tips", them: "Basic AI suggestions (premium)" },
      { name: "Resume Sharing", us: "Direct URL sharing", them: "URL sharing with analytics" },
      { name: "Cover Letter", us: "Free, integrated generator", them: "Not included" },
      { name: "Grammar Check", us: "Not built-in", them: "Integrated grammar checker" }
    ],
    cta: "Try our free resume builder — more ATS features, no watermark, no premium lock."
  },
  {
    slug: "zety-alternative",
    competitor: "Zety",
    competitorUrl: "https://zety.com",
    headline: "Zety vs ResumeBuilder: Free Resume Builder That Beats $23/Month Paywall",
    description: "Zety locks essential features behind a paywall. See how our completely free resume builder gives you more — no subscription required.",
    summary: "Zety is one of the most popular resume builders, but their model is aggressively freemium: you can build a resume but cannot download it as PDF without paying $23/month. Even basic features like spell check and different templates require payment. Our builder is 100% free — build, customize, and export unlimited resumes with no paywall.",
    prosCons: {
      ours: ["100% free PDF download — no paywall", "Real-time ATS scoring with detailed breakdown", "AI-powered content improvement tools", "More resume examples with specific role guidance", "Free cover letter builder included"],
      theirs: ["More template designs (18+ vs our 8)", "Built-in spell checker and grammar tools", "Content snippets library", "Larger library of pre-written phrases"]
    },
    features: [
      { name: "Price", us: "Completely free", them: "$23/month or $71/year" },
      { name: "PDF Export", us: "Free, unlimited", them: "Locked behind premium paywall" },
      { name: "ATS Optimization", us: "Advanced — 5 dimensions, keyword gap analysis", them: "Basic suggestions" },
      { name: "Templates", us: "8 pro + 7 color themes each", them: "18+ templates (premium)" },
      { name: "Spell Check", us: "Browser-based", them: "Built-in spell checker (premium)" },
      { name: "Cover Letter", us: "Free, integrated", them: "Separate purchase needed" },
      { name: "Sign-Up Required", us: "No", them: "Yes — account needed" }
    ],
    cta: "Stop paying for resume builders. Create your professional resume free — no credit card, no limits."
  },
  {
    slug: "canva-resume-alternative",
    competitor: "Canva",
    competitorUrl: "https://canva.com",
    headline: "Canva vs ResumeBuilder: ATS-Friendly Templates Without the Design Overhead",
    description: "Canva's resumes look great but struggle with ATS. See why purpose-built resume tools outperform design templates.",
    summary: "Canva is a powerful design tool, but it's not built for resumes. The biggest problem: Canva resumes are notoriously bad for ATS systems — they use text boxes, columns, and graphic elements that parsing software cannot read. While the designs are beautiful, they often result in resumes that rank 0 on ATS compatibility. Our builder creates clean, ATS-optimized layouts that pass automated screenings while still looking professional.",
    prosCons: {
      ours: ["ATS-optimized layouts — designed to pass automated screening", "Real-time ATS score as you build", "Clean text-based output parsers can read perfectly", "Structured data entry ensures consistent formatting", "Export as proper PDF (not image-based)"],
      theirs: ["Vast library of visual templates", "Advanced design customization options", "Team collaboration features", "Brand kit for company-wide usage"]
    },
    features: [
      { name: "ATS Compatibility", us: "100% — clean HTML/CSS layouts built for parsers", them: "Often fails — text boxes and columns confuse ATS" },
      { name: "Ease of Use", us: "Form-based data entry, instant preview", them: "Drag-and-drop design (requires design skills)" },
      { name: "PDF Export", us: "Clean, selectable text PDF", them: "Image-based PDF (text not selectable)" },
      { name: "Templates", us: "8 ATS-optimized + 7 color themes", them: "1000s of templates (not ATS-optimized)" },
      { name: "AI Writing Help", us: "Bullet point improver and summary generator", them: "Magic Write (Canva AI, limited on free)" },
      { name: "Cover Letter", us: "Free, integrated", them: "Available as Template" }
    ],
    cta: "Build an ATS-friendly resume that actually gets read — no design skills needed."
  },
  {
    slug: "resume-now-alternative",
    competitor: "Resume-Now",
    competitorUrl: "https://www.resume-now.com",
    headline: "Resume-Now vs ResumeBuilder: Free Isn't an Upgrade — We're Actually Free",
    description: "Resume-Now charges for every essential feature. Here's why our completely free builder is the smarter choice.",
    summary: "Resume-Now is one of the most expensive resume builders, charging $35/month after a limited free trial. Even during the trial, you cannot download your resume as a PDF without paying. Our builder offers everything Resume-Now charges for — templates, PDF export, ATS scoring, AI writing help — completely free, no time limit, no trial period.",
    prosCons: {
      ours: ["Completely free with no time limits or trials", "Unlimited PDF exports with no watermark", "Advanced ATS scoring with actionable feedback", "AI-powered writing assistance", "Integrated cover letter generator"],
      theirs: ["Professional customer support team", "Resume distribution service to recruiters", "Career coaching add-ons", "More template design variety"]
    },
    features: [
      { name: "Price", us: "Free (no trial, no time limit)", them: "$35/month after free trial" },
      { name: "PDF Export", us: "Free, unlimited, no watermark", them: "Requires paid subscription ($35/mo)" },
      { name: "ATS Score", us: "Advanced — 5 dimensions, detailed gap analysis", them: "Basic keyword suggestions" },
      { name: "Templates", us: "8 pro + 7 colors each", them: "25+ professional templates" },
      { name: "AI Writing", us: "Bullet point + summary generator, free", them: "Not available" },
      { name: "Cover Letter", us: "Free, integrated", them: "Not included" },
      { name: "Sign-Up", us: "Not required", them: "Email sign-up required for trial" }
    ],
    cta: "Skip the free trial trap. Start building now and download your resume free — no limit, no charge."
  },
  {
    slug: "resume-io-alternative",
    competitor: "Resume.io",
    competitorUrl: "https://resume.io",
    headline: "Resume.io vs ResumeBuilder: Why Pay $48/Month When Free Does More?",
    description: "Resume.io charges premium prices. See how our free builder matches or beats their features without the subscription.",
    summary: "Resume.io is a polished resume builder with good templates, but at $48/month or $120/year, it's among the most expensive options. Their free tier is extremely limited — you can see templates but cannot download anything. Our builder gives you the full experience — all templates, PDF export, ATS scoring, and AI features — completely free.",
    prosCons: {
      ours: ["100% free — all features unlocked", "Advanced ATS scoring with keyword gap analysis", "Real-time resume scoring as you type", "Free cover letter generator included", "No account or sign-up required"],
      theirs: ["More template designs with premium look", "Integrated job search and application tracking", "Multiple export formats (PDF, DOCX, TXT)", "Content suggestions and phrase library"]
    },
    features: [
      { name: "Price", us: "Free (all features)", them: "$48/month or $120/year" },
      { name: "Free Tier", us: "Full access — all templates, export, scoring", them: "Preview only — cannot download or print" },
      { name: "ATS Score", us: "Advanced real-time scoring + stand-alone checker", them: "Not available" },
      { name: "Templates", us: "8 pro + 7 color themes", them: "30+ templates (paid)" },
      { name: "PDF Export", us: "Free, unlimited", them: "Paid only" },
      { name: "AI Writing", us: "Free bullet point and summary generator", them: "Content suggestions (paid)" },
      { name: "Cover Letter", us: "Free, integrated", them: "Not included" }
    ],
    cta: "Build your professional resume free — no subscription, no credit card, no compromises."
  },
  {
    slug: "resume-companion-alternative",
    competitor: "Resume Companion",
    competitorUrl: "https://www.resumecompanion.com",
    headline: "Resume Companion vs ResumeBuilder: Free ATS Tools Beat Basic Templates",
    description: "Resume Companion offers basic templates. Get advanced ATS optimization, AI writing help, and more — completely free.",
    summary: "Resume Companion provides decent basic resume templates, but lacks advanced features like ATS scoring, AI writing assistance, and keyword gap analysis. Their resume builder is straightforward but limited. Our builder goes beyond basic templates with real-time ATS analysis, AI-powered writing suggestions, and comprehensive keyword optimization — all completely free.",
    prosCons: {
      ours: ["Advanced ATS scoring with 5 analysis dimensions", "AI-powered bullet point and summary improvement", "Real-time keyword gap analysis against job descriptions", "40+ role-specific resume examples with tips", "Free cover letter and bullet point tools"],
      theirs: ["Simple, easy-to-use interface", "Quick resume builder wizard", "Resume examples and guides", "Some free resources available"]
    },
    features: [
      { name: "Price", us: "Completely free", them: "Free basic builder; premium for PDF" },
      { name: "ATS Scoring", us: "Advanced 5-dimension + STAR + quantified + fluff detection", them: "Not available" },
      { name: "AI Writing", us: "Bullet point improver, summary, cover letter generator", them: "Not available" },
      { name: "Templates", us: "8 pro + 7 color themes + ATS-optimized", them: "Basic templates (not ATS-optimized)" },
      { name: "PDF Export", us: "Free, unlimited", them: "Free tier limited; premium for full access" },
      { name: "Keyword Analysis", us: "Job description matching with synonym detection", them: "Not available" }
    ],
    cta: "Build a smarter resume with real-time ATS feedback — free, no sign-up needed."
  },
]
