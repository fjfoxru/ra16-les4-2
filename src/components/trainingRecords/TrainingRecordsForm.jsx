import { useState } from 'react';

function TrainingRecordsForm (props) {
    
    const [newTraining, setNewTraining] = useState({
        km: props.data.km || 0,
        date: props.data.date || new Date(),
    });

    const onDateChange = (e) => {
        setNewTraining(newTraining => ({
            ...newTraining,
            date: e.target.value
        }));
    }

    const onKmChange = (e) => {
        setNewTraining(newTraining => ({
            ...newTraining,
            km: e.target.value
        }));
    }


    const onAddTrainingSubmit = (e) => {
        e.preventDefault();
        props.onAddTraining(newTraining)
    }

    return (
        <form onSubmit={onAddTrainingSubmit}>
            <input type="date" id="date" name="date" value={newTraining.date} onChange={onDateChange} />
            <input type="number" id="km" name="km" value={newTraining.km} onChange={onKmChange} />
            <button>ОК</button>
        </form>
    )
}

export default TrainingRecordsForm;