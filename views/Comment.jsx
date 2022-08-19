const React = require('react');

function Comment({ comment, grade, riderLoginFB }) {
  return (
    <form className="commentBox">
      <br />
      <h3>Комментарий: «{comment}»</h3>
      <h4>Оценка: {grade}</h4>
      <h5>Автор: {riderLoginFB}</h5>
    </form>
  );
}

module.exports = Comment;