import requests
import csv
import time

# Replace with your actual API key if required (some APIs need auth)
API_BASE_URL = "https://vedicscriptures.github.io/slok"  # Example base URL

# Bhagavad Gita has 18 chapters
TOTAL_CHAPTERS = 18

# Create a list to store all sloka data
all_slokas = []

# Loop through chapters and verses
for chapter in range(1, TOTAL_CHAPTERS + 1):
    # Most chapters have different verse counts, adjust accordingly
    if chapter == 1:
        total_verses = 47
    elif chapter == 2:
        total_verses = 72
    elif chapter == 3:
        total_verses = 43
    elif chapter == 4:
        total_verses = 42
    elif chapter == 5:
        total_verses = 29
    elif chapter == 6:
        total_verses = 47
    elif chapter == 7:
        total_verses = 30
    elif chapter == 8:
        total_verses = 28
    elif chapter == 9:
        total_verses = 34
    elif chapter == 10:
        total_verses = 42
    elif chapter == 11:
        total_verses = 55
    elif chapter == 12:
        total_verses = 20
    elif chapter == 13:
        total_verses = 35
    elif chapter == 14:
        total_verses = 27
    elif chapter == 15:
        total_verses = 20
    elif chapter == 16:
        total_verses = 24
    elif chapter == 17:
        total_verses = 28
    elif chapter == 18:
        total_verses = 78
    else:
        total_verses = 0  # Shouldn't happen

    for verse in range(1, total_verses + 1):
        url = f"{API_BASE_URL}/{chapter}/{verse}"

        headers = {
            "Accept": "application/json",
            # "Authorization": f"Bearer {API_KEY}",  # Uncomment if auth needed
        }

        print(f"Fetching Chapter {chapter}, Verse {verse}...")

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            data = response.json()

            sloka_entry = {
                "chapter": chapter,
                "verse": verse,
                "slok": data.get("slok", ""),
                "transliteration": data.get("transliteration", ""),
            }
             # Now dynamically check for available author keys
            author_keys = ['tej', 'siva', 'purohit', 'chinmay','san', 'adi', 'gambir','madhav','rams' 'prabhupada', 'vedabase', 'rajan','abhinav', 'java','vallabh','srid','srid','dhan','venkat','neel','sankar','ms', 'abhishek', 'anand', 'raman', 'geeta_press']

            for author in author_keys:
                if author in data:
                    sloka_entry[f"{author}_et"] = data[author].get("et", "")

            all_slokas.append(sloka_entry)

            time.sleep(0.2)  # Be nice to the API (rate limiting)

        except requests.exceptions.RequestException as e:
            print(f"Error fetching Chapter {chapter} Verse {verse}: {e}")
            continue

# Find all field names dynamically (from the first sloka_entry)
fieldnames = list(all_slokas[0].keys())

# Save to CSV
csv_filename = "gita_all_authors_translations.csv"

with open(csv_filename, mode='w', newline='', encoding='utf-8-sig') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(all_slokas)

print(f"\n Done! Saved {len(all_slokas)} records to {csv_filename}")
