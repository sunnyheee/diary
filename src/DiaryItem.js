import { useRef, useState } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to delete the ${id} diary?`)) {
      onRemove(id);
    }
  };

  const handleQuiteEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`?Do you want to modify the ${id} diary?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          Writer : {author} | Emotional score : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleString("en-US")}
        </span>
      </div>

      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuiteEdit}>Cancel</button>
          <button onClick={handleEdit}>Complete</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>Remove</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
