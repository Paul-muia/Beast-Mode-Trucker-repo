document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');

    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Form validation
        const exerciseType = document.getElementById('exercise-type').value;
        const duration = document.getElementById('duration').value;
        const intensity = document.getElementById('intensity').value;
        const caloriesBurned = document.getElementById('calories-burned').value;

        if (!exerciseType || !duration || !intensity) {
            alert('Please fill in all required fields');
            return;
        }

        // Create workout object
        const workout = {
            id: Date.now(),
            date: new Date().toISOString(),
            exerciseType,
            duration: parseInt(duration),
            intensity,
            caloriesBurned: parseInt(caloriesBurned) || 0
        };

        // Retrieve existing workouts from localStorage
        let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workouts.push(workout);

        // Save updated workouts to localStorage
        localStorage.setItem('workouts', JSON.stringify(workouts));

        // Reset form
        workoutForm.reset();

        // Optional: Redirect to dashboard or show success message
        alert('Workout logged successfully!');
    });


});

