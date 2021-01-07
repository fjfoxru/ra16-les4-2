import TrainingRecordsItem from './TrainingRecordsItem';

function TrainingRecordsList(props) {

    const deleteItemFromThisList = (e) => {
        props.deleteItem(e);
    };
    const editItemFromThisList = (e) => {
        props.editItem(e);
    };
    const sortedArray = props.data.sort(function(a, b) {
        return a.date - b.date;
    })

    return (
        <div className="training-table">
            {sortedArray.map(item => <TrainingRecordsItem item={item} key={item.date} deleteItemFromList={deleteItemFromThisList} onEditItemFromList={editItemFromThisList} />)
            }
        </div>
    )
}
export default TrainingRecordsList;