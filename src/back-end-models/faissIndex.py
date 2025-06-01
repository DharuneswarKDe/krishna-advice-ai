import pandas as pd
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# Load your Gita CSV
csv_file = "gita_cleaned_comments.csv"
df = pd.read_csv(csv_file)

# Dynamically detect all columns related to translations (assumes they end with '_et')
author_columns = [col for col in df.columns if col.endswith('_et')]

# Which text to embed? (combine Sanskrit + all author translations for better retrieval)
texts = (df['slok'].fillna('') + "\n" +
         df[author_columns].fillna('').agg(' \n'.join, axis=1)).tolist()

# Load a small, fast embedding model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Encode all slokas
embeddings = model.encode(texts, show_progress_bar=True)

# Build FAISS index
dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))

print(f"Added {len(texts)} slokas to FAISS index.")

# Save FAISS index
faiss.write_index(index, "gita_index.faiss")