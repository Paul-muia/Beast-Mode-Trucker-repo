document.addEventListener('DOMContentLoaded', () => {
    const recentWorkoutsContainer = document.getElementById('recent-workouts');

    // Retrieve workouts from localStorage
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    // Sort workouts by date (most recent first)
    workouts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Display up to 5 most recent workouts
    const recentWorkouts = workouts.slice(0, 5);

    if (recentWorkouts.length === 0) {
        recentWorkoutsContainer.innerHTML = '<p>No workouts logged yet</p>';
    } else {
        const workoutList = recentWorkouts.map(workout => `
            <div class="workout-item">
                <p>Date: ${new Date(workout.date).toLocaleDateString()}</p>
                <p>Exercise: ${workout.exerciseType}</p>
                <p>Duration: ${workout.duration} minutes</p>
                <p>Intensity: ${workout.intensity}</p>
            </div>
        `).join('');

        recentWorkoutsContainer.innerHTML = `
            <h2>Recent Workouts</h2>
            ${workoutList}
        `;
    }
});