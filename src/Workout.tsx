import React, { useState } from 'react';
import { WorkOutApp } from './WorkOutApp';
const workouts = [
    {
        title: 'Pushups',
        description: 'Do 30 pushups',
        time: 1000 * 60 * 3,
    },
    {
        title: 'Squats',
        description: 'Do 30 squats',
        time: 1000 * 60 * 2,
    },
    {
        title: 'Pullups',
        description: 'Do 10 pullups',
        time: 1000 * 60 * 3,
    },
];

export const Workout = () => {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);
    const handleWorkoutComplete = (workoutTitle: any) => {
        setCompletedWorkouts((prevCompletedWorkouts) => {
            return [...prevCompletedWorkouts, workoutTitle]
        })
    }
    return (
        <> <main>
            <section>
                <h2>Choose a Workout</h2>
                {workouts.map((workout, index) => (
                    <WorkOutApp key={index} {...workout} onComplete={() => handleWorkoutComplete(workout.title)} />
                ))}
            </section>
            <section>
                <ul>
                    {completedWorkouts?.map((workoutTitle, index) => (
                        <li key={index}>{workoutTitle}</li>
                    )
                    )}
                </ul>

            </section>


        </main>
        </>
    )





}

export default Workout;