# Mood-Based Food and Music Recommender

A **Chrome Extension** that recommends food and music based on your mood using free APIs like [TheMealDB](https://www.themealdb.com/) and [Last.fm](https://www.last.fm/).

---

### 📝 Features

### 🎯 Mood-Based Recommendations
- Select your mood from options: Happy, Sad, Stressed, Excited.
- Get personalized food and music suggestions.

### 🔗 API Integration
- **TheMealDB** for meal recommendations based on mood.
- **Last.fm** for music recommendations based on mood-related tags.

### 🖥️ User-Friendly Interface
- Dropdown menu for mood selection.
- Links to meal images and YouTube music videos.

---

### 🚀 Getting Started

### Prerequisites
- Google Chrome (latest version)
- Basic understanding of Git and Chrome extensions.

---

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mood-recommender.git
cd mood-recommender
```

#### 2. Load the Extension in Chrome

1.	Open Chrome and go to chrome://extensions/.
2.	Enable Developer Mode (toggle in the top-right corner).
3.	Click Load unpacked and select the project folder.

### 3. Test the Extension

•	Click the extension icon in the Chrome toolbar.
•	Select a mood and click “Get Suggestions.”

### 🔧 APIs Used

🍴 TheMealDB API

- Provides meal suggestions based on categories.
- Example Endpoint:
```bash
 curl --location 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
```

🎵 Last.fm API

- Fetches music tracks based on mood tags.
- Example Endpoint:
 ```bash
curl --location --globoff 'https://ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=happy&api_key={API_KEY}&format=json'
```

### 📂 Project Structure
```bash
mood-recommender/
├── manifest.json        # Chrome extension manifest file
├── popup.html           # HTML for the extension's popup UI
├── popup.js             # JavaScript for extension logic and API integration
├── styles.css           # Optional: CSS for custom styling
└── README.md            # Documentation (this file)
```

### 🛠️ Future Enhancements

	•	Add more moods and food categories.
	•	Integrate additional APIs for more comprehensive suggestions.
	•	Enhance the extension’s UI/UX for better user experience.
