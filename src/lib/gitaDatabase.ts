
export interface GitaVerse {
  verse: string;
  chapter: number;
  verseNumber: number;
  meaning: string;
  reflection: string;
}

// Sample verses from the Bhagavad Gita for initial demonstration
export const gitaVerses: GitaVerse[] = [
  {
    verse: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    chapter: 4,
    verseNumber: 7,
    meaning: "Whenever there is decay of righteousness and rise of unrighteousness, O Bharata, I manifest Myself.",
    reflection: "This verse reveals the divine purpose of incarnation – to restore balance in the world when negativity prevails. It suggests that divine intervention occurs in cycles to maintain cosmic harmony."
  },
  {
    verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    chapter: 2,
    verseNumber: 47,
    meaning: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results, and never be attached to inaction.",
    reflection: "This teaches detached action – doing your duty without being anxious about the outcome. Success or failure should not affect your commitment to right action."
  },
  {
    verse: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    chapter: 2,
    verseNumber: 48,
    meaning: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
    reflection: "Mental equilibrium in success and failure is true yoga. This balanced mind allows us to perform actions with greater skill and peace."
  },
  {
    verse: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    chapter: 3,
    verseNumber: 35,
    meaning: "It is better to perform one's own duty imperfectly than to perform another's duty perfectly. Destruction in one's own duty is better than engaging in another's duty, for following another's path is dangerous.",
    reflection: "This verse emphasizes the importance of following your authentic life path rather than imitating others. Your natural abilities and inclinations are where you'll find fulfillment."
  },
  {
    verse: "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते। इति मत्वा भजन्ते मां बुधा भावसमन्विताः॥",
    chapter: 10,
    verseNumber: 8,
    meaning: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts.",
    reflection: "This verse reveals the divine source of all existence and suggests that recognizing this universal truth leads to devotion from the enlightened."
  }
];

// Keywords to match with user queries for relevant verse recommendations
export const keywordMap: Record<string, number[]> = {
  "duty": [0, 1, 2, 3],
  "action": [1, 2, 3],
  "work": [1, 2, 3],
  "karma": [1, 2],
  "balance": [0, 2],
  "purpose": [0, 3, 4],
  "path": [3, 4],
  "dharma": [0, 3],
  "success": [1, 2],
  "failure": [1, 2],
  "divine": [0, 4],
  "devotion": [4],
  "self": [1, 2, 3],
  "anxiety": [1, 2],
  "stress": [1, 2],
  "equanimity": [2],
  "peace": [2],
  "mind": [2],
  "attachment": [1, 2],
  "desire": [1, 2],
  "authentic": [3],
  "life": [0, 3, 4],
  "universe": [0, 4],
  "spiritual": [0, 4],
  "material": [4],
  "existence": [4],
  "knowledge": [4]
};

// Find relevant verses based on keywords in the query
export function findRelevantVerses(query: string): GitaVerse[] {
  const words = query.toLowerCase().split(/\s+/);
  const verseIndices = new Set<number>();
  
  words.forEach(word => {
    Object.entries(keywordMap).forEach(([keyword, indices]) => {
      if (word.includes(keyword) || keyword.includes(word)) {
        indices.forEach(index => verseIndices.add(index));
      }
    });
  });
  
  // If no matches found, return a default verse
  if (verseIndices.size === 0) {
    return [gitaVerses[Math.floor(Math.random() * gitaVerses.length)]];
  }
  
  return Array.from(verseIndices).map(index => gitaVerses[index]);
}

// Generate a response based on the user's query
export function generateResponse(query: string): string {
  const relevantVerses = findRelevantVerses(query);
  
  if (relevantVerses.length === 0) {
    return "I don't have specific guidance from the Bhagavad Gita for your question, but I encourage you to reflect on your inner wisdom. Krishna teaches that divine knowledge resides within all of us.";
  }
  
  // Select a verse to highlight
  const mainVerse = relevantVerses[0];
  
  let response = `In the Bhagavad Gita, Krishna offers wisdom that may help with your question. In Chapter ${mainVerse.chapter}, Verse ${mainVerse.verseNumber}, he says:\n\n"${mainVerse.verse}"\n\nThis means: "${mainVerse.meaning}"\n\n${mainVerse.reflection}`;
  
  // Add additional verses if available
  if (relevantVerses.length > 1) {
    response += `\n\nAnother relevant teaching from the Gita is in Chapter ${relevantVerses[1].chapter}, Verse ${relevantVerses[1].verseNumber}: "${relevantVerses[1].meaning}" ${relevantVerses[1].reflection}`;
  }
  
  return response;
}
