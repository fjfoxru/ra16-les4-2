function TrainingRecordsItem (props) {
    const { item } = props;

    const onDeleteItem = (e) => {
        e.preventDefault();
        props.deleteItemFromList(item);
    }
    const onEditItem = (e) => {
        e.preventDefault();
        props.onEditItemFromList(item);
    }
    return (
        <div className="training-table__row">
            <div className="training-table__cell">
                <span className="training-table__date">
                    {item.date}
                </span>
            </div>
            <div className="training-table__cell">
                <span className="training-table__km">
                    {item.km}
                </span>
            </div>
            <div className="training-table__cell">
                <span className="training-table__actions">
                    <button className="training-table__action" onClick={onEditItem}>✎</button>
                    <button className="training-table__action" onClick={onDeleteItem}>✗</button>
                </span>
            </div>


        </div>

    )
}

export default TrainingRecordsItem;