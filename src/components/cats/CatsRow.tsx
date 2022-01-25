import { useEffect, useState } from "react";
import "./Cats.css";

const CatsRow = ({
    name,
    handleDelete,
    handleEdit,
    index }:
    { name: string, handleDelete: Function, handleEdit: Function, index: number }) => {
    const [isEdit, setEdit] = useState<boolean>(false);
    const [editedValue, setEditedValue] = useState<string | undefined>(undefined);


    useEffect(() => {
        setEditedValue(isEdit ? name : undefined);
    }, [isEdit, name]);

    return (
        <div className="row  Cats-Row">
            {
                isEdit ?
                    <input value={editedValue} onChange={({ target: { value } }) => setEditedValue(value)} />
                    : <h3>{name}</h3>
            }
            <div>
                {!isEdit ? <>
                    <button onClick={() => setEdit(true)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </> : <>
                    <button
                        onClick={() => {
                            setEdit(false);
                            handleEdit(editedValue, index);
                        }}
                    >
                        Save
                    </button>
                    <button onClick={() => setEdit(false)}>Discard</button>
                </>}
            </div>
        </div>
    );
};

export default CatsRow;
