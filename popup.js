document.getElementById('suggestBtn').addEventListener('click', async () => {
  const mood = document.getElementById('mood').value;
  console.log("Selected Mood:", mood);

  const moodToFood = {
    happy: "Dessert",
    sad: "Vegetarian",
    stressed: "Chicken",
    excited: "Seafood"
  };

  const moodToMusicQuery = {
    happy: "happy",
    sad: "sad",
    stressed: "relaxed",
    excited: "energetic"
  };

  const foodCategory = moodToFood[mood];
  const musicQuery = moodToMusicQuery[mood];

  const foodApiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`;
  const musicApiUrl = `https://ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=${musicQuery}&api_key=202f4e071384c5726809448b576983f5&format=json`;

  const recommendationsDiv = document.getElementById('recommendations');
  recommendationsDiv.innerHTML = `<h3>Recommended Foods and Music:</h3>`;

  try {
    console.log("Fetching food recommendations...");
    const foodResponse = await fetch(foodApiUrl);
    const foodData = await foodResponse.json();
    console.log("Food API response:", foodData);

    if (foodData.meals) {
      recommendationsDiv.innerHTML += `<h4>Food Recommendations:</h4>`;
      foodData.meals.forEach(meal => {
        recommendationsDiv.innerHTML += `<p><a href="${meal.strMealThumb}" target="_blank">${meal.strMeal}</a></p>`;
      });
    } else {
      recommendationsDiv.innerHTML += `<p>No food recommendations available for this mood.</p>`;
    }

    console.log("Fetching music recommendations...");
    const musicResponse = await fetch(musicApiUrl);
    const musicData = await musicResponse.json();
    console.log("Music API response:", musicData);

    if (musicData.tracks && musicData.tracks.track) {
      recommendationsDiv.innerHTML += `<h4>Music Recommendations:</h4>`;

      const randomTrack = musicData.tracks.track[Math.floor(Math.random() * musicData.tracks.track.length)];
      const songName = randomTrack.name;
      const artistName = randomTrack.artist.name;

      const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(songName + ' ' + artistName)}`;
      console.log("YouTube Search URL:", youtubeSearchUrl);

      recommendationsDiv.innerHTML += `<p><a href="${youtubeSearchUrl}" target="_blank">${songName} by ${artistName}</a></p>`;
    } else {
      recommendationsDiv.innerHTML += `<p>No music recommendations available for this mood.</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    recommendationsDiv.innerHTML = `<p>Could not fetch recommendations. Please try again later.</p>`;
  }
});