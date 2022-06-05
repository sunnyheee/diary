const DiaryItem = ({ id, author, content, emotion, created_date }) => {
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
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
