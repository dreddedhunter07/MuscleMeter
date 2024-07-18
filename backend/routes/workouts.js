const express =require('express')
const{ 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

}=require('../controllers/workoutControllers')
const router=express.Router()

//GET all workouts
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)
//post a new workout
router.post('/',createWorkout)

//DELETE a new workout
router.delete('/:id',deleteWorkout)

//UPDATE a new workout
router.patch('/:id',updateWorkout)


module.exports=router;
