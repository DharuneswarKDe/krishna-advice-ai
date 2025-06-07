from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
def generate_answer_groq(query, passages, tone):
    context_text = "\n\n".join([
        f"- {p['slok']}\n" + '\n'.join([f"{k}: {v}" for k, v in p.items() if k not in ['chapter', 'verse', 'slok']])
        for p in passages
    ])

    if tone == "boomer":
        prompt = f"""
You’re a seasoned Gita teacher — timeless, steady, and compassionate — offering clarity to someone seeking meaning, balance, or inner peace.

Based on the following Gita drops:

{context_text}

Respond with kindness, simplicity, and gentle authority. Make the advice reassuring, rooted in values, and a light in a world that feels too fast.

Keep it under 100 words and speak like someone who has lived and learned — and now just wants to help others find their center.

User’s question: {query}
"""
    if tone=="millennial":
        prompt = f"""
You’re a spiritual mentor with ancient Gita wisdom — but you totally get hustle culture, anxiety spirals, and quarter-life chaos.

Based on the following Gita drops:

{context_text}

Help the user navigate their situation with grounded insight, mindful realism, and just enough chill to breathe through the madness.

Keep it under 100 words, practical, and make it feel like a calm voice in a noisy Slack thread.

User’s question: {query}
"""
    if tone=="genz":
        prompt = f"""
You’re a wise spiritual guru with deep Gita knowledge — but with Gen Z vibes.

Based on the following Gita drops:

{context_text}

Help the user out with their issue using that Gita wisdom, but make it sound chill, empathetic, and like you're their spiritually woke bestie.

Keep it short (under 100 words), practical, and drop those insights like it’s a TED Talk-meets-TikTok.

User’s question: {query}
"""


    response = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model="llama-3.3-70b-versatile",
        temperature=0.6,
    )
    return response.choices[0].message.content.strip()
