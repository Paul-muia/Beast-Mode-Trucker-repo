document.addEventListener('DOMContentLoaded', () => {
    const workoutSummaryContainer = document.getElementById('workout-summary');

    // Retrieve workouts from localStorage
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    if (workouts.length === 0) {
        workoutSummaryContainer.innerHTML = '<p>No workouts logged yet</p>';
        return;
    }

    // Calculate overall statistics
    const totalWorkouts = workouts.length;
    const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0);
    const averageDuration = (totalDuration / totalWorkouts).toFixed(1);

    // Workout type distribution
    const workoutTypes = workouts.reduce((acc, workout) => {
        acc[workout.exerciseType] = (acc[workout.exerciseType] || 0) + 1;
        return acc;
    }, {});

    workoutSummaryContainer.innerHTML = `
        <h2>Your Fitness Summary</h2>
        <div>
            <p>Total Workouts: ${totalWorkouts}</p>
            <p>Total Exercise Duration: ${totalDuration} minutes</p>
            <p>Average Workout Duration: ${averageDuration} minutes</p>
            <h3>Workout Type Distribution</h3>
            ${Object.entries(workoutTypes).map(([type, count]) => 
                `<p>${type}: ${count} workouts</p>`
            ).join('')}
        </div>
    `;
});