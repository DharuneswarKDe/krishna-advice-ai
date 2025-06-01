import pandas as pd
import re

# Load your Gita CSV
csv_file = "gita_all_authors_translations.csv"
df = pd.read_csv(csv_file)

# Define the list of columns that are author comments
author_columns = [col for col in df.columns if col.endswith('_et')]

# Function to clean a single comment (remove verse numbers etc.)
def clean_comment(text):
    if pd.isna(text):
        return text
    # 1. Remove verse number patterns like '1.1', '3.12' etc
    text = re.sub(r'\b\d+\.\d+\b', '', text)
    # 2. Remove any standalone numbers
    text = re.sub(r'\b\d+\b', '', text)
    # 3. Remove unwanted characters (periods, hyphens, commas)
    text = re.sub(r'[.,-]', '', text)
    # 4. Normalize spaces
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Clean all author comment columns
for col in author_columns:
    df[col] = df[col].apply(clean_comment)

# Define phrases that indicate an unwanted comment
unwanted_phrases = ['did not comment', 'no commentary', 'no explanation', 'see comment under']

# Function to check if a comment is unwanted
def is_unwanted(text):
    if pd.isna(text):
        return False
    text_lower = text.lower()
    return any(phrase in text_lower for phrase in unwanted_phrases)

# Instead of dropping rows, blank out unwanted comments only
for col in author_columns:
    df[col] = df[col].apply(lambda x: "" if is_unwanted(x) else x)

# Save the cleaned dataset
cleaned_csv = "gita_cleaned_comments.csv"
df.to_csv(cleaned_csv, index=False, encoding='utf-8-sig')

print(f" Done cleaning! Saved as {cleaned_csv}")
