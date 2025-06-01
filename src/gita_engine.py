import faiss
import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
from typing import List, Dict

class GitaEngine:
    def __init__(self, index_path="gita_index.faiss",csv_file="gita_cleaned_comments.csv"):
        self.model = SentenceTransformer("all-MiniLM-L6-v2")
        self.index = faiss.read_index(index_path)
        self.df=pd.read_csv(csv_file, encoding='utf-8-sig')
        self.author_columns = [col for col in self.df.columns if col.endswith('_et')]

    def retrieve(self, query: str, k: int = 3) -> List[Dict[str, str]]:
        embedding = self.model.encode([query])
        _, indices = self.index.search(np.array(embedding), k)
        
        results = []
        for idx in indices[0]:
            row = self.df.iloc[idx]
            result = {
                "chapter": str(row.get("chapter", "")),
                "verse": str(row.get("verse", "")),
                "slok": row.get("slok", "")
            }
            
            # Dynamically add all available author translations
            for col in self.author_columns:
                author_name = col.replace('_et', '')  # Get author name by removing '_et'
                result[author_name] = row.get(col, '')

            results.append(result)
        return results
