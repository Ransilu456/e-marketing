import json

themes = [
    {
        "title": "Social Media Marketing Campaign",
        "description": "High-conversion social media graphics designed for maximum engagement and brand consistency across platforms.",
        "features": ["Platform-optimized layouts", "Brand-aligned color theory", "High-impact CTAs"],
        "technologies": ["Photoshop", "Canva", "Graphic Design"]
    },
    {
        "title": "Corporate Event Flyer",
        "description": "Professional event materials designed for corporate seminars and networking events, focusing on legibility and prestige.",
        "features": ["Informational hierarchy", "Print-ready CMYK", "Brand-integrated patterns"],
        "technologies": ["InDesign", "Illustrator", "Typography"]
    },
    {
        "title": "Product Launch Visuals",
        "description": "Stunning product-focused posters for new launches, using advanced photo manipulation and lighting effects.",
        "features": ["Product-centric composition", "Soft-glow lighting", "Modern aesthetics"],
        "technologies": ["Photoshop", "Lightroom", "Visual Arts"]
    },
    {
        "title": "Educational Infographic Poster",
        "description": "Complex information distilled into beautiful, easy-to-understand visual narratives for educational purposes.",
        "features": ["Data visualization", "Clean iconography", "Logical flow"],
        "technologies": ["Illustrator", "Vector Art", "Infographics"]
    },
    {
        "title": "Restaurant Menu & Promo",
        "description": "Appetizing food photography combined with elegant typography to drive sales in the hospitality sector.",
        "features": ["Lifestyle photography", "Elegant font pairing", "Category-based layout"],
        "technologies": ["Photoshop", "InDesign", "Menu Design"]
    },
    {
        "title": "Hiring & Recruitment Graphics",
        "description": "Friendly and professional posters for company recruitment drives, highlighting culture and opportunities.",
        "features": ["Culture-focused visuals", "Clear application steps", "Professional tone"],
        "technologies": ["Figma", "Illustrator", "Employer Branding"]
    },
    {
        "title": "Seasonal Sale Promotion",
        "description": "Vibrant and urgent promotional graphics for holiday sales and seasonal discounts.",
        "features": ["Urgency-driven design", "Vibrant color palettes", "Eye-catching headers"],
        "technologies": ["Photoshop", "Digital Marketing", "Retail Design"]
    },
    {
        "title": "Real Estate Listing Poster",
        "description": "Minimalist and modern property showcase posters for real estate agencies and independent sellers.",
        "features": ["Grid-based image layout", "Property detail icons", "Clean layout"],
        "technologies": ["Illustrator", "Canva", "Real Estate Marketing"]
    },
    {
        "title": "Tech Conference Branding",
        "description": "Futuristic and abstract poster designs for technology summits and developer conferences.",
        "features": ["Abstract vector shapes", "Cyberpunk aesthetics", "Dynamic layouts"],
        "technologies": ["After Effects", "Figma", "Conference Design"]
    }
]

projects = []
for i in range(1, 55):
    theme = themes[(i-1) % len(themes)]
    project_id = f"{i:02d}"
    projects.append({
        "title": f"{theme['title']} #{project_id}",
        "description": theme['description'],
        "image": f"/data/post/poster-{project_id}.jpeg",
        "slug": f"poster-{project_id}",
        "features": theme['features'],
        "technologies": theme['technologies']
    })

content = """export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  technologies: string[];
}

export const posterProjects: Project[] = """ + json.dumps(projects, indent=2) + ";"

with open(r'e:\DO NOT TOUCH\Safe Zone\Applications_Developments\e_marketing_paradice\e-marketing\app\(sites)\services\creative-posters\projects.ts', 'w') as f:
    f.write(content)
