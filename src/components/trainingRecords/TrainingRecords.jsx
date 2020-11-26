import TrainingRecordsForm from './TrainingRecordsForm';
import TrainingRecordsList from './TrainingRecordsList';
import { useState } from 'react';

function TrainingRecords () {
    const [trainingRecord, setTrainingRecord] = useState([]);
    const [editTraining, setEditTraining] = useState({});

    const deleteItemFromList = (e) => {
        setTrainingRecord(function (state) {
            const itemToDelete = state.findIndex(el => el.date === e.date);
            const newList = state.slice()
            newList.splice(itemToDelete, 1)
            return newList;
        }
        );
    }

    const onAddNewTraining = (e) => {
        setTrainingRecord(function (state) {
            const newTraining = state.find(el => el.date === e.date);
            if (newTraining) {
                newTraining.km += +e.km;
                return state.slice();
            } else {
                return [...state, {
                    'date': e.date,
                    'km': +e.km,
                }]
            }


        });
    }
    

    const editItemFromList = (e) => {
        setEditTraining(editTraining => ({...e}));
    }

    return (
        <>
        <TrainingRecordsForm data={editTraining} onAddTraining={onAddNewTraining}/>
        <TrainingRecordsList data={trainingRecord} deleteItem={deleteItemFromList} editItem={editItemFromList}/>
        </>
    )
}

export default TrainingRecords;