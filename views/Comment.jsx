const React = require('react');

function Comment({ comment, grade, riderLoginFB }) {
  return (
    <div className = "regDiv shadow-lg p-3 mb-5 bg-body rounded">
    <form className="commentBox">
      <br />
      <h5>Комментарий: <h3>«{comment}»</h3></h5>
      <h4>Оценка: {grade}</h4>
      <h5>Автор: <h4>{riderLoginFB}</h4></h5>
    </form>
    </div>
  );
}

module.exports = Comment;