import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList, onEdit }) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>There are {diaryList.length} diaries.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
